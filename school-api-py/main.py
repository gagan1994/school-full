from fastapi import FastAPI
from pymongo import MongoClient
from fastapi import Depends, HTTPException, status

import firebase_admin

from fastapi.middleware.cors import CORSMiddleware
import os
from config import settings
from config import get_firebase_user_from_token
from routes import student_route, teacher_route

from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Optional
from fastapi.encoders import jsonable_encoder
from school_firebase_auth import update_user_firebase

class CustomJSONResponse(JSONResponse):
    def render(self, content: any) -> bytes:
        # Exclude None values globally
        encoded_content = jsonable_encoder(content, exclude_none=True)
        return super().render(encoded_content)


app = FastAPI(default_response_class=CustomJSONResponse)
default_app = firebase_admin.initialize_app()

origins = [settings.frontend_url]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(settings.atlas_uri)
    app.database = app.mongodb_client[settings.db_name]
    print("Connected to the MongoDB database!")


@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()

@app.get("/")
async def root():
    print("Current App Name:", default_app.name)
    return {"message": "Welcome to the PyMongo tutorial!"}

@app.get("/user_login")
async def user_login(firebase_user = Depends(get_firebase_user_from_token)):
    email = firebase_user['email']
    print("email:",email)
    query = {"email":email}
    user = app.database['student'].find_one(query)
    user_type = "student"
    if user is None:
        user = app.database['teacher'].find_one(query)
        user_type = "teacher"
        print(f"email couldnt find in teacher checking parent")
        if user is None:
            user = app.database['parent'].find_one(query)
            print(f"email couldnt find in parent")
            user_type = "parent"
            if user is None:
                raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"sudent with ID {phone} not found")
                
    print("found user: ",user," from: ",user_type)
    return {"msg":"Hello, user","uid":firebase_user['uid'],"user_type":user_type,'user':user} 


app.include_router(student_route, tags=["student"], prefix="/student")
app.include_router(teacher_route, tags=["teacher"], prefix="/teacher")

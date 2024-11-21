from fastapi import FastAPI
from pymongo import MongoClient
from user_route import router as user_route
from fastapi import Depends, HTTPException, status

import firebase_admin

from fastapi.middleware.cors import CORSMiddleware
import os
from config import settings
from config import get_firebase_user_from_token



app = FastAPI()
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
async def user_login(user = Depends(get_firebase_user_from_token)):
    print("email:",user['email'])
    return {"msg":"Hello, user","uid":user['uid']} 

app.include_router(user_route, tags=["users"], prefix="/users")

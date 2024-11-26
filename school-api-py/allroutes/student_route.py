
from fastapi import APIRouter, Body, Request, Response, HTTPException, status
from fastapi.encoders import jsonable_encoder
from typing import List
from fastapi import Depends
from models import Student, StudentUpdate, ParentHome
from school_firebase_auth import update_user_firebase
from config import get_firebase_user_from_token
from bson import ObjectId

db_name = "student";

router = APIRouter()

@router.post("/", response_description="Create a new sudent", status_code=status.HTTP_201_CREATED, response_model=Student)
def create_sudent(request: Request, sudent: Student = Body(...)):
    sudent = jsonable_encoder(sudent)
    new_sudent = request.app.database[db_name].insert_one(sudent)
    created_sudent = request.app.database[db_name].find_one(
        {"_id": new_sudent.inserted_id}
    )

    return created_sudent

@router.get("/", response_description="List all sudents", response_model=List[Student])
def list_sudents(request: Request):
    print("----list students----")
    sudents = list(request.app.database[db_name].find(limit=100))
    print("returning student: ",len(sudents))
    return sudents

@router.get("/{phone}", response_description="Get a single sudent by phone", response_model=Student)
def find_sudent(phone: str, request: Request):
    if (sudent := request.app.database[db_name].find_one({"phone": phone})) is not None:
        return sudent
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"sudent with ID {phone} not found")

@router.get("/parent_home/{parent_id}", response_description="Get a single sudent by phone", response_model=ParentHome)
def find_sudent_from_parent_id(parent_id: str, request: Request):
    if (students := request.app.database[db_name].find({"parent": ObjectId(parent_id)})) is not None:

        return {'title':'parent1','childrens':students}
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"sudent with ID {phone} not found")

@router.put("/{phone}", 
response_description="Update a sudent",
 response_model=Student,
 response_model_exclude_unset=True)
async def update_sudent(phone: str, request: Request, sudent: StudentUpdate = Body(...),embed=True,
firebase_sudent = Depends(get_firebase_user_from_token)):
    print(phone)
    sudent = {k: v for k, v in sudent.dict().items() if v is not None}
    if len(sudent) >= 1:
        update_result = request.app.database[db_name].update_one(
            {"phone": phone}, {"$set": sudent}
        )
    if (
        existing_sudent := request.app.database[db_name].find_one({"phone": phone})
    ) is not None:
        await update_user_firebase(existing_sudent,firebase_sudent)
        return existing_sudent

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"sudent with ID {phone} not found")

@router.delete("/{phone}", response_description="Delete a sudent")
def delete_sudent(phone: str, request: Request, response: Response):
    delete_result = request.app.database[db_name].delete_one({"phone": phone})

    if delete_result.deleted_count == 1:
        response.status_code = status.HTTP_204_NO_CONTENT
        response.message = f"sudent with phone {phone} deleted success"
        return response

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"sudent with phone {phone} not found")



from fastapi import APIRouter, Body, Request, Response, HTTPException, status
from fastapi.encoders import jsonable_encoder
from typing import List
from fastapi import Depends
from models import Teacher, TeacherUpdate


db_name = "teacher";

router = APIRouter()

@router.post("/", response_description="Create a new teacher", status_code=status.HTTP_201_CREATED, response_model=Teacher)
def create_teacher(request: Request, teacher: Teacher = Body(...)):
    teacher = jsonable_encoder(teacher)
    print(teacher);
    # new_teacher = request.app.database[db_name].insert_one(teacher)
    # created_teacher = request.app.database[db_name].find_one(
    #     {"_id": new_teacher.inserted_id}
    # )
    created_teacher ={}
    return created_teacher

@router.get("/", response_description="List all teacher", response_model=List[Teacher])
def list_teacher(request: Request):
    print("get list of teachers")
    teacher = list(request.app.database[db_name].find(limit=100))
    print("response:" ,teacher)
    return teacher

@router.get("/{phone_number}", response_description="Get a single teacher by id", response_model=Teacher)
def find_teacher(phone_number: str, request: Request):
    if (teacher := request.app.database[db_name].find_one({"phone_number": phone_number})) is not None:
        return teacher
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"teacher with ID {phone_number} not found")

@router.put("/{phone_number}", 
response_description="Update a teacher",
 response_model=Teacher,
 response_model_exclude_unset=True)
async def update_teacher(phone_number: str, request: Request, teacher: TeacherUpdate = Body(...),embed=True):
    print(phone_number)
    teacher = {k: v for k, v in teacher.dict().items() if v is not None}
    if len(teacher) >= 1:
        update_result = request.app.database[db_name].update_one(
            {"phone_number": phone_number}, {"$set": teacher}
        )
    if (
        existing_teacher := request.app.database[db_name].find_one({"phone_number": phone_number})
    ) is not None:
        return existing_teacher

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"teacher with ID {phone_number} not found")

@router.delete("/{phone_number}", response_description="Delete a teacher")
def delete_teacher(phone_number: str, request: Request, response: Response):
    delete_result = request.app.database[db_name].delete_one({"phone_number": phone_number})

    if delete_result.deleted_count == 1:
        response.status_code = status.HTTP_204_NO_CONTENT
        response.message = f"teacher with phone_number {phone_number} deleted success"
        return response

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"teacher with phone_number {phone_number} not found")

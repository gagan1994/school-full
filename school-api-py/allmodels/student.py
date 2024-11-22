import uuid
from typing import Optional
from pydantic import BaseModel, Field
from .py_object_id import PyObjectId
from datetime import date, datetime, time, timedelta

class Student(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id") 
    fname: Optional[str] = None   
    lname: Optional[str] = None  
    email: Optional[str] = None  
    phone: Optional[str] = None  
    address: Optional[str] = None  
    gender: Optional[str] = None  
    last_login_ip: Optional[str] = None  
    join_date: Optional[datetime] = None
    student_id: Optional[str] = None   
    image_uri: Optional[str] = None  
    status: Optional[bool] = None
    last_login: Optional[datetime] = None
    dob: Optional[datetime] = None
    parent_id: Optional[PyObjectId] = Field(alias="parent")

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "_id": "066de609-b04a-4b30-b46c-32537c7f1f6e",
                "parent_id":"",
                "fname": "Nalini",
                "lname": "S",
                "email": "nalini@gmail.com",
                "phone": "9482178481",
                "address": "WHW8+W6C, 1st Cross Rd, Rajendra Nagar, Shivamogga, Karnataka 577204",
                "dob": "2024-11-21T10:30",
                "gender": "male",
                "role": "primary_teacher",
                "join_date": "2024-11-21T10:30",
                "last_login":"2024-11-21T10:30",
                "last_login_ip":"192.168.1.1",
                "application_id":"1234",
                "image_uri":"",
                "status":False
            }
        }
        orm_mode = True  # Optional for working with ORM (e.g., SQLAlchemy)
        json_encoders = {None: None}  # Handle None values in JSON

        def dict(self, *args, **kwargs):  
            return super().dict(exclude_none=True, *args, **kwargs)

class StudentUpdate(BaseModel):
    fname: Optional[str] = None   
    lname: Optional[str] = None   
    email: Optional[str] = None   
    phone: Optional[str] = None   
    address: Optional[str] = None   
    gender: Optional[str] = None   
    last_login_ip: Optional[str] = None   
    student_id: Optional[str] = None   
    image_uri: Optional[str] = None   
    status: Optional[bool] = None
    last_login: Optional[datetime] = None
    join_date: Optional[datetime] = None
    dob: Optional[datetime] = None
    parent_id: Optional[PyObjectId] = Field(alias="parent")

    class Config:
        schema_extra = {
            "example": {
                "parent_id":"",
                "fname": "Nalini",
                "lname": "S",
                "email": "nalini@gmail.com",
                "phone": "9482178481",
                "address": "WHW8+W6C, 1st Cross Rd, Rajendra Nagar, Shivamogga, Karnataka 577204",
                "dob": "2024-11-21T10:30",
                "gender": "male",
                "role": "primary_teacher",
                "join_date": "2024-11-21T10:30",
                "last_login":"2024-11-21T10:30",
                "last_login_ip":"192.168.1.1",
                "application_id":"1234",
                "image_uri":"",
                "status":False
            }
        }

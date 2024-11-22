import uuid
from typing import Optional
from pydantic import BaseModel, Field
from datetime import date, datetime, time, timedelta
from .py_object_id import PyObjectId
class Teacher(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id") 
    fname: Optional[str] = None  
    lname: Optional[str] = None  
    email: Optional[str] = None  
    phone: Optional[str] = None  
    address: Optional[str] = None  
    gender: Optional[str] = None  
    role: Optional[str] = None  
    salary: Optional[str] = None  
    last_login_ip: Optional[str] = None  
    application_id: Optional[str] = None  
    image_uri: Optional[str] = None  
    status: Optional[bool] = False
    last_login: Optional[datetime] = None
    hire_date: Optional[datetime] = None
    dob: Optional[datetime] = None,

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "_id": "066de609-b04a-4b30-b46c-32537c7f1f6e",
                "fname": "Nalini",
                "lname": "S",
                "email": "nalini@gmail.com",
                "phone": "9482178481",
                "address": "1st Cross Rd, Rajendra Nagar, Shivamogga, Karnataka 577204",
                "dob": "1994-10-10",
                "gender": "male",
                "role": "primary_teacher",
                "hire_date": "2024-11-21T10:30",
                "salary": "10000",
                "last_login":"2024-11-21T10:30",
                "last_login_ip":"192.168.1.1",
                "application_id":"1234",
                "image_uri":"",
                "status":False

            }
        }

class TeacherUpdate(BaseModel):
    fname: Optional[str] = None
    lname: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    address: Optional[str] = None
    gender: Optional[str] = None
    role: Optional[str] = None
    salary: Optional[str] = None
    last_login_ip: Optional[str] = None
    application_id: Optional[str] = None
    image_uri: Optional[str] = None
    status: Optional[bool] = False
    last_login: Optional[datetime] = None
    dob: Optional[datetime] = None
    hire_date: Optional[datetime] = None

    class Config:
        schema_extra = {
            "example": {
                "_id": "066de609-b04a-4b30-b46c-32537c7f1f6e",
                "fname": "Nalini",
                "lname": "S",
                "email": "nalini@gmail.com",
                "phone": "9482178481",
                "address": "WHW8+W6C, 1st Cross Rd, Rajendra Nagar, Shivamogga, Karnataka 577204",
                "dob": "2024-11-21T10:30",
                "gender": "male",
                "role": "primary_teacher",
                "hire_date": "2024-11-21T10:30",
                "salary": "10000",
                "last_login":"2024-11-21T10:30",
                "last_login_ip":"192.168.1.1",
                "application_id":"1234",
                "image_uri":"",
                "status":False
                }
        }
# teacher_sample = {
#                     "_id": {
#                         "$oid": "6740511b4f02ef8ee8a09b92"
#                     },
#                     "fname": "Nalini",
#                     "lname": "S",
#                     "email": "nalini@gmail.com",
#                     "phone": "9482178481",
#                     "address": "WHW8+W6C, 1st Cross Rd, Rajendra Nagar, Shivamogga, Karnataka 577204",
#                     "dob": {
#                         "$date": "1994-11-21T05:00:00.000Z"
#                     },
#                     "gender": "male",
#                     "role": "primary_teacher",
#                     "hire_date": {
#                         "$date": "2024-11-21T05:00:00.000Z"
#                     },
#                     "salary": "10000",
#                     "last_login": {
#                         "$date": "2024-11-21T05:00:00.000Z"
#                     },
#                     "last_login_ip": "192.168.1.1",
#                     "application_id": "1234",
#                     "image_uri": "",
#                     "status": false
#                 }
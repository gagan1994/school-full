import uuid
from typing import Optional
from pydantic import BaseModel, Field

class User(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    name: str = Field(...)
    email: str = Field(...)
    phone_number: str = Field(...)
    image_uri: str = Field(...)
    user_type: str = Field(...)

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "_id": "066de609-b04a-4b30-b46c-32537c7f1f6e",
                "name": "Gagan",
                "email": "gagan.s.patil18@gmail.com",
                "phone_number": "9482718488",
                "image_uri": "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
                "user_type": "student"
            }
        }

class UserUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    phone_number: Optional[str] = None
    image_uri: Optional[str] = None
    user_type: Optional[str] = None

    class Config:
        schema_extra = {
            "example": {
                "name": "Gagan",
                "email": "gagan.s.patil18@gmail.com",
                "phone_number": "9482718488",
                "image_uri": "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
                "user_type": "student"
            }
        }

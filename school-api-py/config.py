import os
import pathlib
from functools import lru_cache
from dotenv import dotenv_values
from pydantic_settings import BaseSettings
# we need to load the env file because it contains the GOOGLE_APPLICATION_CREDENTIALS

from typing import Annotated
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from firebase_admin.auth import verify_id_token
bearer_scheme = HTTPBearer(auto_error=False)


def get_firebase_user_from_token(
    token: HTTPAuthorizationCredentials= Depends(bearer_scheme)) -> dict | None:
    """Uses bearer token to identify firebase user id
    Args:
        token : the bearer token. Can be None as we set auto_error to False
    Returns:
        dict: the firebase user on success
    Raises:
        HTTPException 401 if user does not exist or token is invalid
    """
    try:
        print("token: ",token)
        if not token:
            # raise and catch to return 401, only needed because fastapi returns 403
            # by default instead of 401 so we set auto_error to False
            raise ValueError("No token")
        print("verifyIdToken")
        user = verify_id_token(token.credentials)
        return user
    # lots of possible exceptions, see firebase_admin.auth,
    # but most of the time it is a credentials issue
    except Exception as e:
        # we also set the header
        # see https://fastapi.tiangolo.com/tutorial/security/simple-oauth2/
        print(repr(e))
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not logged in or Invalid credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )


config = dotenv_values(".env")

class Settings(BaseSettings):
    """Main settings"""
    app_name: str = "School"
    env: str = config["ENV"]
    # Needed for CORS
    frontend_url: str = config["FRONTEND_URL"]
    atlas_uri: str = config["ATLAS_URI"]
    db_name: str = config["DB_NAME"]

settings  = Settings()

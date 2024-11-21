from firebase_admin import auth
from models import User

async def update_user_firebase(user,firebase_user):
    print("updating current user: ",user)
    print("firebase user: ",firebase_user)

    updated_user = auth.update_user(
    firebase_user['uid'],
    phone_number='+91'+user['phone_number'],
    display_name=user['name'])
    print('Sucessfully updated user: {0}'.format(updated_user.uid))
##    firebaseUser =  auth.get_user_by_email(user['email'])
 ##   print('Successfully fetched user data: {0}'.format(firebaseUser.uid))


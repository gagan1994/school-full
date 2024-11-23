from pymongo import MongoClient
from config import settings
from datetime import datetime

import random
import uuid
mongodb_client = MongoClient(settings.atlas_uri)
database = mongodb_client[settings.db_name]
now = datetime.now()
table_parent = 'parent'
table_student = 'student'
table_grade = 'grade'
table_course = 'course'
table_teacher = 'teacher'
table_classroom = 'classroom'
table_classroom_course = 'classroom_course'
table_classroom_student = "classroom_student"

table_exam_type = 'exam_type'
table_exam = 'exam'
table_exam_course = 'exam_course'
table_exam_result = 'exam_result'

table_teacher_leave_history = "teacher_leave_history"
table_teacher_leave_request = "teacher_leave_request"
table_techer_leave_balance = "teacher_leave_balance"
table_attendance = "attendance"

def delete_all(delete_tables):
    for val in delete_tables:
        delete_result = database[val].delete_many({})


delete_all(
    [
        table_parent,
        table_student,
        table_grade,
        table_course,
        table_teacher,
        table_classroom,
        table_classroom_course,
        table_classroom_student,

        table_exam,
        table_exam_type,
        table_exam_course,
        table_exam_result,

        table_teacher_leave_history,
        table_teacher_leave_request,
        table_techer_leave_balance,
        table_attendance
 ])


def get_image():
    my_list = ['https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg',
        'https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg',
        'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
        'https://i.pinimg.com/550x/31/b1/41/31b1419af91455fbd5a8ad5fc85c60ac.jpg',
        'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
        'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp']
    return random.choice(my_list)
def get_teacher_name():
    names = ['nalini','shailaja','john','narayan','gracy']
    return random.choice(names).capitalize()
def get_parent_name():
    my_list = ['suresh','sivyogi','lola','kala','raju']
    return random.choice(my_list).capitalize()
def get_student_name():
    my_list = ['gagan','karan','santosh','abhi','puni']
    return random.choice(my_list).capitalize()

def teacher_role():
    role = ['primary_teacher',
            'trained_graduate_teacher',
            'post_graduate_teacher',
            'lead_teacher']
    return random.choice(role)
def get_geneder():
    role = ['male',
            'female',
            'not_specified']
    return random.choice(role)
    
def get_last_name():
    lnames = ['A','B','C','D','E']
    return random.choice(lnames)
def space():
    print()
    print()
    print()
def fetch_from_id(table_name,id):
    return database[table_name].find_one({"_id": id})
def fetch_all(table_name):
    return list(database[table_name].find(limit=100))

def insert_to_db(table_name,record):
    # print("inserting ",table_name," record:",record)
    new_record = database[table_name].insert_one(record)
    # print("insert complete ",record," :",new_record.inserted_id)
    return  new_record.inserted_id
    
def get_phone():
    return "9482718"+str(random.randint(1, 999))


def create_course():
    course = [
        {
            "name": "Kannada",
            "description": "Kannada Language"
        },
        {
            "name": "English",
            "description": "English Language"
        },
        {
            "name": "Hindi",
            "description": "Hindi Language"
        },
        {
            "name": "Maths",
            "description": "Maths Language"
        },
        {
            "name": "Science",
            "description": "Science Language"
        },
        {
            "name": "Social",
            "description": "Social Language"
        }
    ]
    for course_val in course:
        insert_to_db(table_course,course_val)


def create_teacher(course_id):
    name = get_teacher_name()
    lname = get_last_name()
    email = (name+'.'+lname+'@gmail.com').lower()
    teacher = {
    "email": email,
    "application_id": str(uuid.uuid1()),
    "fname": name,
    "lname": lname,
    "dob": now,
    "course":course_id,
    "phone": get_phone(),
    "status": False,
    "last_login": now,
    "last_login_ip": "192.168.1.1",
    "role": teacher_role(),
    "gender": get_geneder(),
    "hire_date": now,
    "salary": (random.randint(1, 20)*1000),
    "address": name+", Gopala Gowda Extension 100ft Road, 4th Cross Rd, Gopala Gowda Extension, Shivamogga, Karnataka 577205"
    }
    return insert_to_db(table_teacher,teacher)
        
def create_classroom():
    
    teachers = fetch_all(table_teacher)
    courses = fetch_all(table_course)

    sections = ['A','B','C']
    for i in range(1,11):
        for section in sections:
            course_id = courses[i % len(courses)]['_id']
            class_room = {
                "year":2024,
                "clas_room_no":i,
                "section":section,
                "remarks":("Classroom "+str(i)+"  Section "+section),
                "status":False,
                "teacher":create_teacher(course_id)
            }
            class_room_id = insert_to_db(table_classroom,class_room)
            for val in courses:
                classroom_course = {
                    "classroom":class_room_id,
                    "course":val['_id'],
                    "difficutlty_level":i * 10
                }
                insert_to_db(table_classroom_course,classroom_course)
            for k in  range(5):
                create_sudent(class_room_id,random.randint(1,3))


def create_sudent(class_room_id, no_of_childern):
    name = get_parent_name()
    lname = get_last_name()
    email = (name+'.'+lname+'@gmail.com').lower()
    phone = get_phone()
    address = name+", 1st Cross Rd, Rajendra Nagar, Shivamogga, Karnataka 577204"
    parent = {
    "email": email,
    "fname": name,
    "lname": lname,
    "phone": phone,
    "gender":get_geneder(),
    "status": False,
    "last_login_date": now,
    "last_login_ip": "192.168.1.1",
    "image_uri": get_image(),
    "address": address
    }
    inserted_id = insert_to_db(table_parent,parent)

    for i in range(no_of_childern):
        name = get_student_name()
        email = (name+'.'+lname+'@gmail.com').lower()
        student_id = str(uuid.uuid1())
        age = random.randint(5, 11)
        student = {
            "email": email,
            "student_id": student_id,
            "fname": name,
            "lname": lname,
            "phone": phone,
            "dob":now,
            "date_of_join": now,
            "gender":get_geneder(),
            "status": False,
            "last_login_date": now,
            "last_login_ip": "192.168.1.1",
            "image_uri": get_image(),
            "parent": inserted_id,
            "age": age
        }
        student_id = insert_to_db(table_student,student)
        classroom_student ={
            "classroom":class_room_id,
            "student":student_id
        } 
        insert_to_db(table_classroom_student, classroom_student)

create_course()
create_classroom()

def create_exam():
    exam_type = [
        {
            "name":"Test",
            "Description":"Test which covers small portion 1 or 2 chapters"
        },
        {
            "name":"Preparatory",
            "Description":"Exam which covers medium portion 3 or 4 chapters"
        },
        {
            "name":"Exam",
            "Description":"Exam which covers Large portion 5 or 6 chapters"
        },
    ]
    exam_type_id = {}
    for val in exam_type:
        id = insert_to_db(table_exam_type,val)
        exam_type_id[val['name']] = id

    exam = [
        {
            "name":"Unit Test 1",
            "description":f"Test with 25% of syllabus",
            "exam_type":exam_type_id['Test'],
            "start_date":datetime(year=2025, month=7, day=15)
        },
        {
            "name":"Unit Test 2",
            "description":f"Test with 25% to 50% of syllabus",
            "exam_type":exam_type_id['Test'],
            "start_date":datetime(year=2025, month=8, day=11)
        },
        {
            "name":"Mid-Term",
            "description":f"Mid term exam covering 50% of syllabus",
            "exam_type":exam_type_id['Preparatory'],
            "start_date":datetime(year=2025, month=10, day=10)
        },
        {
            "name":"Unit Test 3",
            "desc":f"Test with 50% to 75% of syllabus",
            "exam_type":exam_type_id['Test'],
            "start_date":datetime(year=2026, month=1, day=1)
        },
        {
            "name":"Unit Test 4",
            "description":"Unit with main questions",
            "exam_type":exam_type_id['Test'],
            "start_date":datetime(year=2026, month=2, day=12)
        },
        {
            "name":"Final Exams",
            "description":"Exams with all syllabus",
            "exam_type":exam_type_id['Exam'],
            "start_date":datetime(year=2026, month=3, day=1)
        },
    ]
    exam_ids = {}
    for val in exam:
        id = insert_to_db(table_exam,val)
        exam_ids[val['name']] = id

    courses = fetch_all(table_course)
    students = fetch_all(table_student)
    schedule_exam = exam[0]
    exam_id =  exam_ids[schedule_exam['name']]
    first_half_booked = False
    add_date = 0
    hour = 10
    exam_course_ids=[]
    for i in range(len(courses)):
        exam_date = schedule_exam['start_date']
        schedule_course_date = datetime(year= exam_date.year,month= exam_date.month,day = exam_date.day+add_date,
        hour = hour)
        schedule_course_date_end = datetime(year= exam_date.year,month= exam_date.month,day = exam_date.day+add_date,
        hour = hour+3)
        exam_course = {
            "course":courses[i]['_id'],
            "exam":exam_id,
            "start_date":schedule_course_date,
            "end_date":schedule_course_date_end
        }
        if i%2 :
            hour = 10
            add_date = add_date+1
        else :
            hour = 2
        id = insert_to_db(table_exam_course,exam_course)
        exam_course_ids.append(id)
    
    students = fetch_all(table_student)
    for val in students:
        for exam_course_id in exam_course_ids:
            exam_result = {
                "exam_course":exam_course_id,
                "student":val['_id']
            }
            insert_to_db(table_exam_result,exam_result)


create_exam()


def create_attendance(date_time):
    class_room_student_details = fetch_all(table_classroom_student)
    for val in class_room_student_details:
        class_room = fetch_from_id(table_classroom,val['classroom'])
        teacher = fetch_from_id(table_teacher,class_room['teacher'])
        status = random.choice([True,True,True,False])
        remarks = "Present"
        if not status:
            remarks = random.choice(["Sick Leave","Unknown reason","Long leave"])
        attendance = {
            "date":date_time,
            "classroom_student_id": val['_id'],
            "teacher": teacher['_id'],
            "status":status,
            "remarks":remarks
        }
        id = insert_to_db(table_attendance,attendance)

def create_teacher_leave():
    #  table_teacher_leave_history,
    #     table_teacher_leave_request,
    #     table_techer_leave_balance
    teachers = fetch_all(table_teacher)
    for val in teachers:
        preg_leave = {}
        if val['gender'] == "male":
            preg_leave ={
                "leave_type": "paternity",
                "remaining_days":10,
                "teacher":val['_id']
            }
        else: 
            preg_leave = {
                "leave_type": "maternity",
                "remaining_days":180,
                "teacher":val['_id']
            }
        techer_leave_balance = [
            {
                "leave_type": "sick",
                "remaining_days":10,
                "teacher":val['_id']
            },
            {
                "leave_type": "paid",
                "remaining_days":20,
                "teacher":val['_id']
            },
            {
                "leave_type": "others",
                "remaining_days":5,
                "teacher":val['_id']
            },
            preg_leave
        ]
        for leave_bal in techer_leave_balance:
            insert_to_db(table_techer_leave_balance,leave_bal)
    
    teacher = random.choice(teachers)
    teacher_leave_req = {
        "leave_type": "sick",
        "start_date":now,
        "end_date":now,
        "request_date":now,
        "status":"pending_approval",
        "comments":"Feeling sick",
        "teacher":teacher['_id']
    }
    insert_to_db(table_teacher_leave_request,teacher_leave_req)

create_attendance(now)
create_teacher_leave()


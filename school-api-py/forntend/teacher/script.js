function foo() {
    try {
        myForm = document.getElementById("form");
        const formEntries = new FormData(myForm).entries();
        const json = Object.assign(...Array.from(formEntries, ([x, y]) => ({ [x]: y })));
        console.log(JSON.stringify({
            json
        }));
        fetch("http://192.168.1.8:8000/teacher", {
            method: "POST",
            body: json,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });


    } catch (err) {
        console.log(err);
    }
    return false;
}
// "_id": "066de609-b04a-4b30-b46c-32537c7f1f6e",
// "fname": "Nalini",
// "lname": "S",
// "email": "nalini@gmail.com",
// "phone": "9482178481",
// "address": "WHW8+W6C, 1st Cross Rd, Rajendra Nagar, Shivamogga, Karnataka 577204",
// "dob": "1994-03-03T08:00:00.000",
// "gender": "male",
// "role": "primary_teacher",
// "hire_date": "2016-03-03T08:00:00.000",
// "salary": "10000",
// "last_login":"2016-03-03T08:00:00.000",
// "last_login_ip":"192.168.1.1",
// "application_id":"1234",
// "image_uri":"",
// "status":False
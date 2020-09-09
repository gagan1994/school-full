//npm install --save whatwg-fetch 

import 'whatwg-fetch';
let instance = null;
const BASE_URI='http://192.168.29.231:3001/';
const HOME_IMAGES_URI=BASE_URI+'home_images'

class HttpService{

    constructor(){
        if(!instance){
            instance=this;
        }
        return instance;
    }

    getImageList =() => {
        var promise =new Promise((resolve,reject)=>{

            fetch(HOME_IMAGES_URI)
                .then(response => {
                var res=response.json();
                resolve(res);
            })
                .catch(() =>{
                reject("cannot process");
                console.log("Can’t access  response. Blocked by browser?");
            });
        });
        return promise;
    }

    postHomeImages=(opts)=>{
        var promise =new Promise((resolve,reject)=>{
            fetch(HOME_IMAGES_URI,{
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(opts)}
                 ).then(response => {
                var res=response.json();
                resolve(res);
            }).catch(() =>{
                reject("cannot process");
                console.log("Can’t access  response. Blocked by browser?");
            });
        });
        return promise;
    }
}

export default HttpService;

let instance = null;
var firebase = require('firebase');
var firebaseConfig = {
      apiKey: "AIzaSyDmI4zNyKn2YZ9Z9yS0KjTT7w1MJmO-ucA",
      authDomain: "key-cistern-195108.firebaseapp.com",
      databaseURL: "https://key-cistern-195108.firebaseio.com",
      projectId: "key-cistern-195108",
      storageBucket: "key-cistern-195108.appspot.com",
      messagingSenderId: "100779530628",
      appId: "1:100779530628:web:65b27026c4626196c7a5d1"
};

class FirebaseHelpers{

      constructor(){
            if(!instance){
                  instance=this;
            }
            return instance;
      }

      getFirebase=()=>{
            console.log("firebase.apps.length  : "+firebase.apps.length )
            if(!firebase.apps.length ){
                  firebase.initializeApp(firebaseConfig)
            }
            return firebase;
      } 
}
export default FirebaseHelpers;

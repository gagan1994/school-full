export const NOTIF_LOGIN_STATUS_CHANGE="notif-login-status-change";

let instance=null;
var observers =  {};


class NotificationService{
    constructor(){
        if(!instance){
            instance=this;
        }
        return instance;
    }

    pushNotification = (notifName, data) => {
        var obs = observers[notifName];
        for (var x=0; x<obs.length;x++){
            var obj = obs[x];
            obj.callback(data);
        }
    }


    addObserver = (notifName, ob, cb)=>{
        let obs= observers[notifName];
        if(!obs){
            observers[notifName]=[];
        }
        let obj = {observer: ob, callback: cb};
        observers[notifName].push(obj);
    }

    removeObserver = (notifName,ob) => {
        if(observers[notifName]){
            for(var x=0 ; x<observers[notifName].length;x++){   
                if(observers[notifName][x].observer === ob){
                    observers[notifName].splice(x,1);
                    break;
                }
            }
        }
    }

}
export default NotificationService;


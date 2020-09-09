import NotificationService, {NOTIF_WISHLIST_CHANGE} from './notification-service';

let ns=new NotificationService();
let instance = null;
var wishList=[];

class DataServices{
    constructor(){
        if(!instance){
            instance=this;
        }
        return instance;
    }

    addWishListItem = item =>{
        wishList.push(item);
        ns.pushNotification(NOTIF_WISHLIST_CHANGE,wishList);
    }

    removeWishListItem = item =>{
        for(var x=0;x<wishList.length;x++){
            if(wishList[x]._id===item._id){
                wishList.splice(x,1);
                ns.pushNotification(NOTIF_WISHLIST_CHANGE,wishList)
                break;
            }
        }
    }
    itemOnWishList = item => {
        for(var x=0;x<wishList.length;x++){
            if(wishList[x]._id === item._id){
                return true;
            }
        }
        return false;
    }
}

export default DataServices;











import React,{Component} from 'react';
import isValidUrl from '../utils/utils.js';
import HttpService from '../services/http-services';


const http = new HttpService();

class SaveBtn extends Component{

  constructor(props){
    super(props);
    this.onSaveClick=this.onSaveClick.bind(this);
    this.state={
      imgUrls:[]      
    };
  }

  onSaveClick=(event)=>{
    var imageUrls=document.getElementsByClassName('imageUrls');
    console.log("imgUrls",imageUrls);
    var isFail=false;
    for(var x in imageUrls){
      var urlIp=imageUrls[x];
      if(urlIp&&urlIp.value){
        if(isValidUrl(urlIp.value)){
          if (this.state.imgUrls.indexOf(urlIp.value) === -1)
            this.state.imgUrls.push({"uri":urlIp.value}); 
        }else{
          urlIp.value = "";
          isFail=true;
        }
      }
    }
    if(isFail){
      alert("enter proper data");
    }else{
      console.log("Post data Req",this.state.imgUrls);
      http.postHomeImages(this.state.imgUrls)
        .then(data =>
              {
        console.log("Post data Response",data);
      }, err =>{
        console.log("Post data Error",err);
      });
    }

    //    event.preventDefault();
  }
  render(){
    return(
      <div>
        <button type="submit" class="margin-xl btn btn-outline-success" onClick={(event)=>this.onSaveClick(event)}>Save</button>
      </div>
    );
  }
}
export default SaveBtn;
import React,{Component} from 'react';
import './home-carosel.scss';
import CaroselItems from './items.js';
import uuid from 'react-uuid'
import isValidUrl from '../utils/utils.js';
import HttpService from '../services/http-services';

const http = new HttpService();
class HomeCarosel extends Component{
  constructor(props){
    super(props);
    this.state={fileItems:[{_id:'one',uri:"",description:""}]};
    this.getItems=this.getItems.bind(this);
    this.createNewElement=this.createNewElement.bind(this);
    this.onClickDelte=this.onClickDelte.bind(this);
    this.loadData = this.loadData.bind(this);
    this.loadData();
  }

  loadData = () =>
  {
    var self = this;
    http.getImageList()
      .then(data =>{
      self.setState({fileItems:data});
    }, err =>
            {

    });
  }
  onClickDelte=(item)=>{
    var id = item._id;
    var index = -1;
    for(var x =0;x< this.state.fileItems.length;x++){
      if(this.state.fileItems[x]._id === item._id){
        index=x;
      }

    }
    if(index!=-1){
      this.state.fileItems.splice(index,1);
    }
    console.log("this.state.fileItems",this.state.fileItems);
    this.setState(this.state);
  }

  createNewElement=(event)=> {
    var imageUrls=document.getElementsByClassName('imageUrls');
    var lastImgUrl= imageUrls[imageUrls.length-1];
    if(!lastImgUrl){
      var items=document.getElementById("newElementId");
      this.state.fileItems.push({_id:uuid(),uri:"",description:""});
      this.setState(this.state); 
      return;
    }
    if(lastImgUrl.value){
      if(!isValidUrl(lastImgUrl.value)){
        alert("enter proper url");
        return;
      }

      var items=document.getElementById("newElementId");
      this.state.fileItems.push({_id:uuid(),uri:"",description:""});
      this.setState(this.state); 
    }else{
      alert("add image first");
    }
  }

  getItems=()=>{
    var self=this;
    const list=
          this.state.fileItems.map((item)=>(
            <li className="fileItem">
              <CaroselItems item={item} onClickDelete={()=>self.onClickDelte(item)}></CaroselItems>        
            </li>));
    return(list);
  }



  render() {
    return (
      <div className="HomeCarosel">
        <div className="container-fluid topMargin">
          <div className="row">
            <div className="col"></div>
            <div className="col-6" align="center">
              <div id="newElementId"> 
                <ul>
                  {this.getItems()}
                </ul>
              </div>

              <div id="dynamicCheck">
                <button  class="btn btn-primary"  onClick={(event)=>{this.createNewElement();event.preventDefault();}}>Add Images</button>
              </div>


            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCarosel;

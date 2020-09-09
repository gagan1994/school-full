import React,{Component} from 'react';
import './home-carosel.scss';

class CaroselItems extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div align="center"   class="input-group mb-3">
          {
            (this.props.item.uri)?
              <input type="text" value={this.props.item.uri?this.props.item.uri:""} 
                class="imageUrls form-control" placeholder="Image Url" 
                aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              :
              <input type="text" 
                class="imageUrls form-control" placeholder="Image Url" 
                aria-label="Recipient's username" aria-describedby="basic-addon2"/>

          }         
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">Choose file</button>
          </div> 
          <div align="center" class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" onClick={(event)=>{
                this.props.onClickDelete(this.props.item)
                event.preventDefault();
              }}>
              <i class="fa fa-close trashbtn"/>
              Delte</button>
          </div>
        </div>
      </div>
    );
  }
}
export default CaroselItems;
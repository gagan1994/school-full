import React,{Component} from 'react';
import './image-container.scss';
import ImageContainer1 from './image-container-1/image-container-1.js';
import HttpService from '../services/http-services';

const http = new HttpService();

class ImageContainer extends Component {
    constructor(props){
        super(props);
        this.state={fileItems:[]}
        //        this.getItems=this.getItems.bind(this);
        this.loadData=this.loadData.bind(this);
        this.loadData();
    }
    loadData = () =>
    {
        var self = this;
        http.getImageList()
            .then(data =>{
            console.info('fileItems:',data);
            self.setState({fileItems:data});
        }, err =>
                  {
            console.info('fileItems: Error',err);
        });
    }
    getItems=()=>{
        var self=this;
        var list=[];
        for(var i=0; i<this.state.fileItems.length;i++){
            if(i==0){
                list.push(<div className= "carousel-item active">
                        <ImageContainer1 uri={this.state.fileItems[i].uri}>
                        </ImageContainer1>
                    </div>);
            }else{
                list.push(<div className= "carousel-item">
                        <ImageContainer1 uri={this.state.fileItems[i].uri}>
                        </ImageContainer1>
                    </div>)
            }
        }


        return(list);
    }
    getCaroselItems=()=>{
        var self=this;
        var list=[];
        for(var i=0; i<this.state.fileItems.length;i++){
            if(i==0){
                list.push(<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>);
            }else{
                list.push(<li data-target="#carouselExampleIndicators" data-slide-to={i}></li>)
            }
        }


        return(list);
    }


    render(){
        return (
            <div class="owl-item">

                <div class="box-left-mini">
                    <div class="front">
                        <img className="imag-div" src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/icons/line-2.png"/>

                    </div>
                    <div class="behind_container">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                               {this.getCaroselItems()}
                            </ol>
                            <div class="carousel-inner">
                                {this.getItems()}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ImageContainer;

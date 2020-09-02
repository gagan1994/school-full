import React,{Component} from 'react';
import './image-container.scss';
import ImageContainer1 from './image-container-1/image-container-1.js';

class ImageContainer extends Component {

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
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <ImageContainer1>
                                    </ImageContainer1>
                                </div>
                                <div class="carousel-item">
                                    <ImageContainer1 >
                                    </ImageContainer1>                              
                                </div>
                                <div class="carousel-item" >
                                    <ImageContainer1>
                                    </ImageContainer1>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ImageContainer;

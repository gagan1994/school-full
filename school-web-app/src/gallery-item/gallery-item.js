import React,{Component} from 'react';
import './gallery-item.scss';

class GalleryItem extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a href={this.props.galleryItems.hyperUrl} class="fancybox" rel="ligthbox">
                    <img  src={this.props.galleryItems.imgUrl} class="zoom img-fluid "  alt=""/>
                </a>
            </div>
        );
    }
}

export default GalleryItem;
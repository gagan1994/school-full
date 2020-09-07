import React,{Component} from 'react';
import GalleryItem from '../gallery-item/gallery-item.js';
import ContentHeader from '../content-header/content-header.js';


import LocalDb from '../local-db/local-db.js';
let localDb = new LocalDb();

class Container4 extends Component {
    constructor(props){
        super(props);
        this.state={galleryItems:localDb.getGallryImages()};
    }

    galleryItems= () =>{
        const list=this.state.galleryItems.map((items)=>(
            <GalleryItem galleryItems={items}></GalleryItem>
        ));
        return (list);
    }

    render(){
        return (
            <div className="container-4" id="#gallery">
                <ContentHeader title="Our Gallery" 
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunte magna aliquaet, consectetempora incidunt">
                </ContentHeader>
                <div class="row">
                    {this.galleryItems()}
                </div>

            </div>

        );
    }
}

export default Container4;
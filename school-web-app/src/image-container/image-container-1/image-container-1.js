import React,{Component} from 'react';
import './image-container-1.scss';

class ImageContainer1 extends Component {

    constructor(props){
        super(props);
    
    }

    render(){
        return(
            <div style={{backgroundImage : `url(${this.props.uri})`}} className="bg-pngimage--1  carosel-containers">
                <div className="row">
                    <div className="col-lg-8 col-sm-6 corosel-contents">
                        <h1>
                            Play& Learn How to
                        </h1>

                    </div>
                    <div className="col">
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-sm-6 corosel-contents">
                        <h2>
                            Create new Things
                        </h2>

                    </div>
                    <div className="col">
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8 col-sm-6 corosel-contents">
                        <h3>Read More</h3>

                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        )
    }
}
export default ImageContainer1;

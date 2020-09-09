import React,{Component} from 'react';
import './content-header.scss';

class ContentHeader extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="row">
                <div className="col-lg-12">
                    <div className={this.props.isLightTheme?"section__title text-center":"section__title__dark text-center"}>
                        <h2 className={this.props.isLightTheme?"title__line":"title__line__dark"}>{this.props.title}</h2>
                        <p className={this.props.description? "vissible-class":"invissible-class"}>{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentHeader;
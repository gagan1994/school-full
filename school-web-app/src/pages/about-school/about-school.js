import React, {Component} from 'react';

import ContentHeader from '../../content-header/content-header.js';

class AboutPage extends Component{

    render(){
        return (
            <div className="content">
                <ContentHeader title="Welcome To Junior Home" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunte magna aliquaet, consectetempora incidunt"/>
            </div>
        );

    }
}

export default AboutPage;
import React,{Component} from 'react';
import './container-5.scss';
import BlogItem from './blog-item.js';
import ContentHeader from '../content-header/content-header.js';


import LocalDb from '../local-db/local-db.js';
let localDb = new LocalDb();


class Container5 extends Component {
    constructor(props){
        super(props);
        this.state={blogItems:localDb.getBlogsList()};
        
    }
     blogItems= () =>{
        const list=this.state.blogItems.map((items)=>(
            <BlogItem blogItems={items}></BlogItem>
        ));
        return (list);
    }
    render(){
        return (
            <div className="container-5" id="#blogs">
                <ContentHeader title="Recent Blogs" 
                    isLightTheme="true"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunte magna aliquaet, consectetempora incidunt">
                </ContentHeader>
                <div class="container">

                    <div class="row blog__wrapper mt--40">
                        {this.blogItems()}
                    </div>
                </div>
            </div>
        );
    }

}


export default Container5;








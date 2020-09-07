import React,{Component} from 'react';
import './blog-item.scss';

class BlogItem extends Component {
    constructor(props){
        super(props);
    }
   
    render(){
        return(
            <div class="col-lg-4 col-md-6 col-sm-12">
                <article class="blog card">
                    <div class="blog__date">
                        <span>Date : {this.props.blogItems.date}th {this.props.blogItems.monthYear}</span>
                    </div>
                    <div class="blog__thumb">
                        <a href="blog-details.html">
                            <img src={this.props.blogItems.imgUrl} alt="blog images"/>
                        </a>
                    </div>
                    <div class="blog__inner">
                        <span>{this.props.blogItems.title_sub1}</span>
                        <h4><a href="blog-details.html">{this.props.blogItems.title}</a></h4>
                        <p>{this.props.blogItems.description}</p>
                        <ul class="blog__meta d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                            <li><a href="#">Comments : {this.props.blogItems.commment_count}</a></li>
                            <li><a href="#">Like : {this.props.blogItems.likesCount}</a></li>
                        </ul>
                    </div>
                </article>
            </div>
        );
    }
}

export default BlogItem;
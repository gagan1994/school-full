import React,{Component} from 'react';
import './container-5.scss';
import ContentHeader from '../content-header/content-header.js';

class Container5 extends Component {
    constructor(props){
        super(props);
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
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <article class="blog">
                                <div class="blog__date">
                                    <span>Date : 10th November, 2017</span>
                                </div>
                                <div class="blog__thumb">
                                    <a href="blog-details.html">
                                        <img src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/blog/md-img/1.jpg" alt="blog images"/>
                                    </a>
                                </div>
                                <div class="blog__inner">
                                    <span>Children Blog : Post By Ariana</span>
                                    <h4><a href="blog-details.html">Basic Knowledge About Drawing</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur ad modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                    <ul class="blog__meta d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                                        <li><a href="#">Comments : 05</a></li>
                                        <li><a href="#">Like : 07</a></li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <article class="blog">
                                <div class="blog__date">
                                    <span>Date : 10th November, 2017</span>
                                </div>
                                <div class="blog__thumb">
                                    <a href="blog-details.html">
                                        <img src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/blog/md-img/2.jpg" alt="blog images"/>
                                    </a>
                                </div>
                                <div class="blog__inner">
                                    <span>Children Blog : Post By Jonson</span>
                                    <h4><a href="blog-details.html">Study Tour</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur ad modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                    <ul class="blog__meta d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                                        <li><a href="#">Comments : 05</a></li>
                                        <li><a href="#">Like : 07</a></li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <article class="blog">
                                <div class="blog__date">
                                    <span>Date : 10th November, 2017</span>
                                </div>
                                <div class="blog__thumb">
                                    <a href="blog-details.html">
                                        <img src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/blog/md-img/3.jpg" alt="blog images"/>
                                    </a>
                                </div>
                                <div class="blog__inner">
                                    <span>Children Blog : Post By Michel Jack</span>
                                    <h4><a href="blog-details.html">Childrens Day</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur ad modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                    <ul class="blog__meta d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-between">
                                        <li><a href="#">Comments : 05</a></li>
                                        <li><a href="#">Like : 07</a></li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


export default Container5;








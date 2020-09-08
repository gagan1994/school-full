import React,{Component} from 'react';
import './container-2.scss';
import ContentHeader from '../content-header/content-header.js';
import { Router, Link } from "react-router-dom";

class Container2 extends Component {
    render(){
        return(
            <div className="container-fluid continer-2">
                <div>
                    <ContentHeader title="Welcome To Junior Home" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunte magna aliquaet, consectetempora incidunt"/>
                </div>
                <div class="row jn__welcome__wrapper align-items-center">
                    <div class="col-md-12 col-lg-6 col-sm-12">
                        <div class="welcome__juniro__inner">
                            <h3>Welcome to Our School</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisic ming elit, sed do ei Excepteur sint occaecat cupida proident, sunt in culpa qui dese runt mol anim id est lai aborum. Sed ut perspiciatis unde omnis iste natus error svolupt accu doloremque laudantium, totam rem.</p>
                            <div class="wel__btn">
                                <Link to='/about'>  
                                    <h4>Read More</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6 col-sm-12 md-mt-40 sm-mt-40">
                        <div class="jnr__Welcome__thumb">
                            <img src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/wel-come/1.png" alt="images"/>
                            <a class="play__btn" href="https://www.youtube.com/watch?v=MCJEkZtqlBk"><i class="fa fa-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}




export default Container2;



















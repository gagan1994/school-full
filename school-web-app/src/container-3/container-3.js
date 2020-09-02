import React,{Component} from 'react';
import './container-3.scss';
import ContentHeader from '../content-header/content-header.js';
import UpcommingEvents from '../upcomming-events/upcomming-events.js';

class Container3 extends Component {

    render(){
        return(
            <div id="#events" className="container-fluid container-3">
                <div class="container">
                    <ContentHeader title="Events & Classes" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunte magna aliquaet, consectetempora incidunt">
                    </ContentHeader>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="service bg--white border__color wow fadeInUp" >
                                <div class="service__icon">
                                    <img src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/shape/sm-icon/1.png" alt="icon images"/>
                                </div>
                                <div class="service__details">
                                    <h6><a href="service.html">Drawing Class</a></h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    <div class="service__btn">
                                        <a class="dcare__btn--2" href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12 xs-mt-60">
                            <div class="service bg--white border__color border__color--2 wow fadeInUp" data-wow-delay="0.2s" >
                                <div class="service__icon">
                                    <img src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/shape/sm-icon/2.png" alt="icon images"/>
                                </div>
                                <div class="service__details">
                                    <h6><a href="service.html">Active Learning</a></h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    <div class="service__btn">
                                        <a class="dcare__btn--2" href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12 md-mt-60 sm-mt-60">
                            <div class="service bg--white border__color border__color--3 wow fadeInUp" data-wow-delay="0.45s" >
                                <div class="service__icon">
                                    <img src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/shape/sm-icon/3.png" alt="icon images"/>
                                </div>
                                <div class="service__details">
                                    <h6><a href="service.html">Creative Lesson</a></h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    <div class="service__btn">
                                        <a class="dcare__btn--2" href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12 md-mt-60 sm-mt-60">
                            <div class="service bg--white border__color border__color--4 wow fadeInUp" data-wow-delay="0.65s" >
                                <div class="service__icon">
                                    <img src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/shape/sm-icon/4.png" alt="icon images"/>
                                </div>
                                <div class="service__details">
                                    <h6><a href="service.html">Yoga Class</a></h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    <div class="service__btn">
                                        <a class="dcare__btn--2" href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="upcomming-events">
                    </div>
                    <ContentHeader 
                        title="Upcoming Events" >
                    </ContentHeader>
                    
                    <UpcommingEvents>
                    </UpcommingEvents>
                </div>
            </div>
        );
    }
}
export default Container3;

/*import React,{Component} from 'react';
                import './container-3.scss';

                class Container3 extends Component {
                    render(){
                        return(
                            <div className="container-fluid continer-2">

                            </div>

                        );
                    }
                }


















*/

















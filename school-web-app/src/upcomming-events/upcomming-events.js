import React,{Component} from 'react';
import './upcomming-events.scss';

class UpcommingEvents extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container-3-sub">
                <section class="junior__upcomming__area section-padding--lg bg--white">
                    <div class="container">
                        <div class="row upcomming__wrap mt--40">
                            <div class="col-lg-6 col-md-12 col-sm-12">
                                <div class="upcomming__event">
                                    <div class="upcomming__thumb">
                                        <img src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/upcomming/1.png" alt="upcomming images"/>
                                    </div>
                                    <div class="upcomming__inner">
                                        <h6><a href="event-details.html">Todler Art Exhibition</a></h6>
                                        <p>Lor error sit volupta item accusantim doloremque laudantium, toe aperiam, eaque ipsa quae ab illoe invenveritatis et quasi architecto beatae viliquam quaerat voluptatem.</p>
                                        <ul class="event__time">
                                            <li><i class="fa fa-home"></i>Childrens Club, Uttara, Dhaka</li>
                                            <li><i class="fa fa-clock-o"></i>10.00 am to 1.00 pm</li>
                                        </ul>
                                    </div>
                                    <div class="event__occur">
                                        <img src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/upcomming/shape/1.png" alt="shape images"/>
                                        <div class="enent__pub">
                                            <span class="time">21st </span>
                                            <span class="bate">Dec,2017</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12">
                                <div class="upcomming__event">
                                    <div class="upcomming__thumb">
                                        <img src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/upcomming/2.png" alt="upcomming images"/>
                                    </div>
                                    <div class="upcomming__inner">
                                        <h6><a href="event-details.html">Childrens Day Celebration</a></h6>
                                        <p>Lor error sit volupta item accusantim doloremque laudantium, toe aperiam, eaque ipsa quae ab illoe invenveritatis et quasi architecto beatae viliquam quaerat voluptatem.</p>
                                        <ul class="event__time">
                                            <li><i class="fa fa-home"></i>Childrens Club, Uttara, Dhaka</li>
                                            <li><i class="fa fa-clock-o"></i>10.00 am to 1.00 pm</li>
                                        </ul>
                                    </div>
                                    <div class="event__occur">
                                        <img src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/upcomming/shape/1.png" alt="shape images"/>
                                        <div class="enent__pub">
                                            <span class="time">21st </span>
                                            <span class="bate">Dec,2017</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default UpcommingEvents; 
import React,{Component} from 'react';
import './upcomming-events-item.scss';

class UpcommingEventsItem extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="upcomming__event">
                    <div class="upcomming__thumb">
                        <img src={this.props.upcommingEvnts.bg_image} alt="upcomming images"/>
                    </div>
                    <div class="upcomming__inner">
                        <h6><a href="event-details.html">{this.props.upcommingEvnts.title}</a></h6>
                        <p>{this.props.upcommingEvnts.description}</p>
                        <ul class="event__time">
                            <li><i class={this.props.upcommingEvnts.icon1}>
                                </i>
                                {this.props.upcommingEvnts.address}
                            </li>
                            <li><i class={this.props.upcommingEvnts.icon2}></i>{this.props.upcommingEvnts.time}</li>
                        </ul>
                    </div>
                    <div class="event__occur">
                        <img src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/upcomming/shape/1.png" alt="shape images"/>
                        <div class="enent__pub">
                            <span class="time">{this.props.upcommingEvnts.eventDate} </span>
                            <span class="bate">{this.props.upcommingEvnts.eventMonthYear}</span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default UpcommingEventsItem;
import React,{Component} from 'react';
import './events-item.scss';
import ContentHeader from '../content-header/content-header.js';
import UpcommingEvents from '../upcomming-events/upcomming-events.js';

class EventsItem extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div class="col-lg-3 col-md-6 col-sm-6 col-12 xs-mt-60 sm-mt-60">
                <div class="service bg--white border__color wow fadeInUp" >
                    <div class="service__icon">
                        <img src={this.props.event.top_image} alt="icon images"/>
                    </div>
                    <div class="service__details">
                        <h6><a href={this.props.event.navigateTo}>{this.props.event.title}</a></h6>
                        <p>{this.props.event.description}</p>
                        <div class="service__btn">
                            <a class="dcare__btn--2" href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventsItem;
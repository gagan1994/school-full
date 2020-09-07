import React,{Component} from 'react';
import './container-3.scss';
import ContentHeader from '../content-header/content-header.js';
import UpcommingEventsItem from '../upcomming-events/upcomming-event-item.js';

import EventsItem from './events-item.js';


import LocalDb from '../local-db/local-db.js';
let localDb = new LocalDb();

class Container3 extends Component {
    constructor(props){
        super(props);
        this.state={
            events:localDb.getEventsList(),
            upcommingEvnts:localDb.getUpcommingEventsList()      
        };
    }

    eventList=()=>{
        const list= this.state
        .events
        .map(
            (eventObj)=>(
                <EventsItem event={eventObj}/>)
        );
        return (list);
    }
    upcommingEvent=()=>{
        const list= this.state
        .upcommingEvnts
        .map(
            (eventObj)=>
            (<UpcommingEventsItem upcommingEvnts={eventObj}/>)
        );
        return (list);
    }

    render(){
        return(
            <div id="#events" className="container-fluid container-3">
                <div class="container">
                    <ContentHeader title="Events & Classes" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunte magna aliquaet, consectetempora incidunt">
                    </ContentHeader>

                    <div class="row">
                        {this.eventList()}
                    </div>

                    <div className="upcomming-events">
                    </div>
                    <ContentHeader 
                        title="Upcoming Events" >
                    </ContentHeader>
                    <div className="container-3-sub">
                        <section class=" section-padding--sm bg--white">
                            <div class="container">
                                <div class="row upcomming__wrap mt--40">
                                    {this.upcommingEvent()}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
export default Container3;  
















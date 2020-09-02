import React,{Component} from 'react';
import './navbar.scss';

class SchoolNavbar extends Component {
    constructor(props){
        super(props);
        this.onBtnClick=this.onBtnClick.bind(this);
    }

    onBtnClick=(item,id)=>{
        var btnContainer = document.getElementById("nav-items");

        var btn = document.getElementById(item+"-"+id);

        // Get all buttons with class="btn" inside the container
        var btns = document.getElementsByClassName("nav-item");

        // Loop through the buttons and add the active class to the current/clicked button
        for (var i = 0; i < btns.length; i++) {
            btns[i].className = btns[i].className.replace(" active", "");
        }
        btn.className+= " active";
        
        var id =  document.getElementById('#'+id);
        if(id){
            id.scrollIntoView();
        }
    }


    render(){
        return (
            <nav class="navbar navbar-expand-md navbar-dark bg-dark bg-my-primary">

                <div class="mx-auto order-0 w-100">
                    <a class="navbar-brand mx-auto" href="#">
                        <img class="logo-home" src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/logo/junior.png"></img>
                    </a>
                    <button class="navbar-toggler nav-menu-item" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>


                <div class="navbar-collapse collapse  order-1 order-md-0 dual-collapse2">
                    <ul class="navbar-nav mr-auto"id="nav-items">
                        <li class="nav-item active" id="navbtn-home"  onClick={(() => this.onBtnClick("navbtnmhome"))}>
                            <a class="nav-link" href="#"  onClick={(() => this.onBtnClick("navbtn","home"))}>Home</a>
                        </li>
                        <li class="nav-item" id="navbtn-events">
                            <a class="nav-link " href="#events" onClick={(() => this.onBtnClick("navbtn","events"))}>Events</a>
                        </li>
                        <li class="nav-item" id="navbtn-gallery">
                            <a class="nav-link" href="#gallery" onClick={(() => this.onBtnClick("navbtn","gallery"))}>Gallery</a>
                        </li>
                        <li class="nav-item" id="navbtn-blogs">
                            <a class="nav-link" href="#blogs" onClick={(() => this.onBtnClick("navbtn","blogs"))}>Blogs</a>
                        </li>  
                        <li class="nav-item" id="navbtn-contact">
                            <a class="nav-link" href="#contact" onClick={(() => this.onBtnClick("navbtn","contact"))}>Contact</a>
                        </li>
                    </ul>
                </div>


                <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Register</a>
                        </li>
                        <li class="nav-item no-mobile-view"  >
                            <a class="nav-link" href="#">|</a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link" href="#">LogIn</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}


export default SchoolNavbar;

















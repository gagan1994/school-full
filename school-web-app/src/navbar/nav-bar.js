import React,{Component} from 'react';
import './navbar.scss';
import NotificationServices,{NOTIF_LOGIN_STATUS_CHANGE} from '../services/noitification-services.js';
import LogoutHooks from '../google-helpers/components/LogoutHooks.js';



let ns =new NotificationServices();

class SchoolNavbar extends Component {
    constructor(props){
        super(props);
        this.onBtnClick=this.onBtnClick.bind(this);
        var profileRes=localStorage.getItem('authToken');
        this.state={isLoggedIn:!profileRes};            
        console.log("state from nav-bar:", this.state);
        this.onLoginStatusChanged = this.onLoginStatusChanged.bind(this);
    }

    componentDidMount(){
        ns.addObserver(NOTIF_LOGIN_STATUS_CHANGE,this,this.onLoginStatusChanged);
    }
    componentWillUnmount(){
        ns.removeObserver(NOTIF_LOGIN_STATUS_CHANGE,this);

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
        // Loop through the buttons and add the active class to the current/clicked button
        for (var i = 0; i < btns.length; i++) {
            btns[i].className = btns[i].className.replace(" active", "");
        }
        if(btn.className){
            btn.className+= " active";            
        }

        var id =  document.getElementById('#'+id);
        if(id){
            id.scrollIntoView();
        }
    }

    onLoginStatusChanged = (profileRes)=>{
        console.log("nav-bar profile:",profileRes);
        if(!profileRes){
            this.state={isLoggedIn:false};                       
        }else{
            this.state={isLoggedIn:true};                       
        }
        console.log("login change: navbar",this.state);
        var loginContainers = document.getElementsByClassName("login-items");
        var logOutContainers = document.getElementsByClassName("logout-items");
        var logOutVisibility=profileRes? " vissible-items":" invisible-items";
        var loginVisibility=profileRes? " invisible-items":" vissible-items";


        console.log("logOutVisibility: "+logOutVisibility);
        console.log("loginVisibility: "+loginVisibility);

        for(var x=0;x<loginContainers.length;x++){
            if(loginContainers[x]){
                loginContainers[x].className=loginContainers[x].className.replace(" vissible-items","");
                loginContainers[x].className=loginContainers[x].className.replace(" invisible-items","");
                loginContainers[x].className=loginContainers[x].className+loginVisibility;
                console.log("loginContainers className",loginContainers[x].className);
            }  


        }
        for(var x=0;x<loginContainers.length;x++){
            if(logOutContainers[x]){
                logOutContainers[x].className=logOutContainers[x].className.replace(" vissible-items","");
                logOutContainers[x].className=logOutContainers[x].className.replace(" invisible-items","");
                logOutContainers[x].className=logOutContainers[x].className+logOutVisibility;
                console.log("logOutContainers className",logOutContainers[x].className);
            }
        }

        console.log("loginContainers: ",loginContainers);
        console.log("logOutContainers: ",logOutContainers);

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
                        <li class="nav-item active" id="navbtn-home"  onClick={(() => this.onBtnClick("navbtn","home"))}>
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

                <div id="login-continer" class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className={"nav-item logout-items "+
                                ((!this.state.isLoggedIn) ?"invisible-items":"vissible-items")}>
                            <LogoutHooks>
                            </LogoutHooks>
                        </li>
                        <li className={"nav-item login-items "+
                                ((!this.state.isLoggedIn) ?"vissible-items":"invisible-items")}>
                            <a className="nav-link" href="#" >Register</a>
                        </li>
                        <li className={"nav-item no-mobile-view login-items "+
                                (!this.state.isLoggedIn ? "vissible-items":"invisible-items")}>
                            <a className="nav-link" href="#">|</a>
                        </li>  
                        <li className={"nav-item login-items "+
                                ((!this.state.isLoggedIn) ?"vissible-items":"invisible-items")}>
                            <a className="nav-link" href="#"  data-toggle="modal" data-target="#logInModal">LogIn</a>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}


export default SchoolNavbar;

















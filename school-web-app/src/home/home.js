import React,{Component} from 'react';
import logo from './logo.svg';
import  './home.scss';
import SchoolNavbar from '../navbar/nav-bar';
import ImageContainer from '../image-container/image-container';
import Container2 from '../container-2/container-2.js';
import Container3 from '../container-3/container-3.js';
import Container4 from '../container-4/container-4.js';
import Container5 from '../container-5/container-5.js';
import AboutPage from '../pages/about-school/about-school.js';
import Footer from '../footer/footer.js';
import LoginModal from '../login-modal/login-modal.js';
import NotificationServices,{NOTIF_LOGIN_STATUS_CHANGE} from '../services/noitification-services.js';
import {Route, Link} from "react-router-dom";

let ns =new NotificationServices();

class Home extends Component{

  constructor(props){
    super(props);
    this.scrollFunction=this.scrollFunction.bind(this);
    window.onscroll = this.scrollFunction;
    var profileRes=localStorage.getItem('authToken');
    console.log("from-app",profileRes);
    this.state={profile:profileRes};
    this.onLoginStatusChanged = this.onLoginStatusChanged.bind(this);
    this.highlitHome = this.highlitHome.bind(this);

  }


  componentDidMount(){
    ns.addObserver(NOTIF_LOGIN_STATUS_CHANGE,this,this.onLoginStatusChanged);
  }
  componentWillUnmount(){
    ns.removeObserver(NOTIF_LOGIN_STATUS_CHANGE,this);

  }


  onLoginStatusChanged = (profileRes)=>{
    this.state={profile:profileRes}

  }

  highlitHome = ()=>{
    var btnContainer = document.getElementById("nav-items");
    var btn = document.getElementById("navbtn-home");

    // Get all buttons with class="btn" inside the container
    var btns = document.getElementsByClassName("nav-item");

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
      btns[i].className = btns[i].className.replace(" active", "");
    }

    if(btn.className){
      btn.className+= " active";    
    }
  }


  scrollFunction =()=> {
    var mybutton= document.getElementById("scrollUp");
    if(mybutton){
      console.log("doc.ScrollTop:", document.documentElement.scrollTop);
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {

        mybutton.style.display = "none";
        this.highlitHome();
      }
    }
  }

  render() {
    return (
      <div className="Home">
        <SchoolNavbar profileObj={this.state.profileObj}/>
        <LoginModal/>   

        <ImageContainer>
        </ImageContainer>
        <Container3/>
        <Container4/>
        <Container5/>
        <Footer/>
        <a id="scrollUp" className="scroll-up-btn"href="#top" >
          <i className="fa fa-angle-up">
          </i></a>
      </div>
    );
  }

}

export default Home;
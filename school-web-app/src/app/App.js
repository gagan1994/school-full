import React,{Component} from 'react';
import logo from './logo.svg';
import SchoolNavbar from '../navbar/nav-bar';
import ImageContainer from '../image-container/image-container';
import Container2 from '../container-2/container-2.js';
import Container3 from '../container-3/container-3.js';
import Container4 from '../container-4/container-4.js';
import Container5 from '../container-5/container-5.js';
import Footer from '../footer/footer.js';
import './App.scss';
import LoginModal from '../login-modal/login-modal.js';
import NotificationServices,{NOTIF_LOGIN_STATUS_CHANGE} from '../services/noitification-services.js';


let ns =new NotificationServices();

class App extends Component{

  constructor(props){
    super(props);
    this.scrollFunction=this.scrollFunction.bind(this);
    window.onscroll = this.scrollFunction;
    var profileRes=localStorage.getItem('authToken');
    console.log("from-app",profileRes);
    this.state={profile:profileRes};
    this.onLoginStatusChanged = this.onLoginStatusChanged.bind(this);
 
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


  scrollFunction =()=> {
    var mybutton= document.getElementById("scrollUp");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  render() {
    return (
      <div className="App">
        <SchoolNavbar profileObj={this.state.profileObj}/>
        <LoginModal/>   

        <ImageContainer>
        </ImageContainer>
        <Container2/>
        <Container3/>
        <Container4/>
        <Container5/>
        <Footer/>
        <a id="scrollUp" className="scroll-up-btn"href="#top" >
          <i class="fa fa-angle-up">
          </i></a>

      </div>
    );
  }

}

export default App;
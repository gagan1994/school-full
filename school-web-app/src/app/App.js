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

class App extends Component{
  constructor(props){
    super(props);

    this.scrollFunction=this.scrollFunction.bind(this);
    window.onscroll = this.scrollFunction;
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
        <header>
          <SchoolNavbar/>
        </header>
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
import React,{Component} from 'react';
import logo from './logo.svg';
import SchoolNavbar from '../navbar/nav-bar';
import ImageContainer from '../image-container/image-container';
import Container2 from '../container-2/container-2.js';
import Container3 from '../container-3/container-3.js';
import Container4 from '../container-4/container-4.js';
import Container5 from '../container-5/container-5.js';
import './App.scss';

class App extends Component{

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
      </div>
    );
  }

}

export default App;
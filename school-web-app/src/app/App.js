import React,{Component} from 'react';
import logo from './logo.svg';
import SchoolNavbar from '../navbar/nav-bar';
import ImageContainer from '../image-container/image-container';
import Container2 from '../container-2/container-2.js';
import './App.scss';

class App extends Component{

  render() {
    return (
      <div className="App">
        <SchoolNavbar/>
        <ImageContainer>
        </ImageContainer>
        <Container2/>
      </div>
    );
  }

}

export default App;
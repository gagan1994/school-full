import React,{Component} from 'react';
import logo from './logo.svg';
import SchoolNavbar from '../navbar/nav-bar';
import ImageContainer from '../image-container/image-container';
import './App.scss';

class App extends Component{

  render() {
    return (
      <div className="App">
        <SchoolNavbar/>
        <ImageContainer>
        </ImageContainer>
      </div>
    );
  }

}

export default App;
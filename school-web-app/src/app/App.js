import React,{Component} from 'react';
import './App.scss';
import {Route, Link} from "react-router-dom";
import Home from '../home/home.js'
import AboutSchool from '../pages/about-school/about-school.js'

class App extends Component{
  

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={AboutSchool}></Route>
      </div>
    );
  }

}

export default App;
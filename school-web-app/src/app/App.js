import React,{Component}from 'react';
import './App.scss';
import {Route,Link,Switch} from "react-router-dom";
import Home from '../home/home.js'
import AboutSchool from '../pages/about-school/about-school.js'

class App extends Component
{

  render(){
    return ( 
      <Switch>
        <Route exact path = "/" component = {Home}></Route> 
        <Route exact path = "/about" component = {AboutSchool}></Route> 
      </Switch>
    );
  }
}

export default App;


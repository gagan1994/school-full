import React,{Component} from 'react';
import logo from './logo.svg';
import SchoolNavbar from '../navbar/nav-bar';
import './App.scss';

class App extends Component{

  render() {
    return (
      <div className="App">
        <SchoolNavbar/>
        <div className="row full-col">
          <div className='col-12  d-flex justify-content-center'>
            <img src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/icons/line-2.png"></img>
            <img >
            
            </img>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
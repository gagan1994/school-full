import React,{Component} from 'react';
import './App.css';
import HomeCarosel from '../home-carosel/home-carosel.js';
import SaveBtn from '../save-btn/save-btn.js';


class App extends Component{

  render() {
    return (
      <div className="App" align="center">
        <form>
          <HomeCarosel/>
          <SaveBtn></SaveBtn>
        </form>
      </div>
    );
  }
}

export default App;

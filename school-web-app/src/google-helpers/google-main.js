import Login from './components/Login';
import Logout from './components/Logout';
import LoginHooks from './components/LoginHooks';
import LogoutHooks from './components/LogoutHooks';
import React,{Component} from 'react';
import './google-main.css'
class GoogleSignInBtn extends Component
{
  render()
  {
    return ( 
      <div>
        <LoginHooks/>
      </div>

      );
   }
}

export default GoogleSignInBtn;
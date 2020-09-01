import React,{Component} from 'react';
import './navbar.scss';

class SchoolNavbar extends Component {

    render(){
        return (
            <div className="container-fluid">
                <div className="row nav-bar-style full-col">
                    <div className="col-1 col-sm-1   nav-bar-container d-flex justify-content-center">
                        <img src="https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753" className="img-sm-logo">
                        </img>

                    </div>
                    <div className="col-9 col-sm nav-bar-container d-flex justify-content-center" id="dropDownClick">
                        <ul className="nav-list-items ">

                            <li  className="nav-list-item">
                                <a  className="nav-item"  href="{{ url('/login') }}">Home</a>
                            </li>

                            <li  className="nav-list-item">
                                <a className="nav-item" href="{{ url('/register') }}">Events</a>
                            </li>
                            <li  className="nav-list-item">
                                <a className="nav-item" href="{{ url('/register') }}">Gallery</a>
                            </li>
                            <li  className="nav-list-item">
                                <a className="nav-item" href="{{ url('/register') }}">About</a>
                            </li> 

                        </ul>
                    </div>
                    <div className="col-2 col-sm-1 nav-bar-container d-flex justify-content-center">
                        <ul className="nav-list-items">

                            <li  className="nav-list-item">
                                <a  className="nav-item"  href="{{ url('/login') }}">Login</a>
                            </li>

                            <li  className="nav-list-item">
                                <a className="nav-item" href="{{ url('/register') }}">Register</a>
                            </li>
                        </ul>
                        <label></label>
                    </div>
                </div>
            </div>
        )
    }
}


export default SchoolNavbar;

















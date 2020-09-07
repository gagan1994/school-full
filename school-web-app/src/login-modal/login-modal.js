import React,   {Component} from 'react';
import './login-modal.scss';
import GoogleSignInBtn from '../google-helpers/google-main.js'

class LoginNavbar extends Component{
    constructor(props){
        super(props);
    }
    render()
    {
        return (

            <div class = "modal fade" id = "logInModal" tabindex = "-1" role = "dialog"  
                aria-labelledby = "myModalLabel"  aria-hidden = "true" >
                <div class = "modal-dialog" role = "document" >
                    <div class = "modal-content" >
                        <div class = "card-signin" >
                            <div class = "form-container">
                                <h5 class = "card-title text-center" > Sign In </h5> 
                                <form class = "form-signin" >
                                    <div class = "form-label-group">
                                        <input type = "email"
                                            id = "inputEmail"
                                            class = "form-control"
                                            placeholder = "Email address"
                                            required autofocus />
                                    </div>

                                    <div class = "form-label-group" >
                                        <input type = "password"
                                            id = "inputPassword"
                                            class = "form-control"
                                            placeholder = "Password"
                                            required />
                                    </div>

                                    <div class = "custom-control custom-checkbox mb-3" >
                                        <input type = "checkbox"
                                            class = "custom-control-input"
                                            id = "customCheck1" />
                                        <label class = "custom-control-label"
                                            for = "customCheck1" > Remember password </label>
                                    </div>
                                    <button class = "btn btn-lg btn-primary btn-block text-uppercase"
                                        onclick = {(() => this.onBtnClick())} > Login </button> 

                                </form>
                            </div> 
                            <div class="google-container"align = "center" >
                                <GoogleSignInBtn />
                            </div> 
                        </div> 
                    </div > 
                </div> 
            </div >

        );
    }


}
export default LoginNavbar;
import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/x.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from "@fortawesome/free-solid-svg-icons"
import '../../App.css'

export default function SignInPage() {
    return (
        <header style={HeaderStyle}>

            <div className="wrapper">
                <header>Login Form</header>
                <form action="/login">
                    <div className="field email">
                        <div className="input-area">
                            <input type="text" placeholder="Email Address"></input>
                               

                                <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                        </div>
                        <div className=" error error-txt"> Email can't be blank</div>
                        <div className="field password">
                            <div className="input-area">
                                <input type="password" placeholder="Password"></input>
                                    
                            </div>
                            <div className=" error error-txt">Password cant be blank</div>
                        </div>
                        <div className="pass-link"><a href="#">Forgot password</a></div>
                        <input type="submit" value="Login"></input>
                    </div>

                </form>
                <div className="signup-link"> Not yet a Member?<a href="#">Sign up now</a></div>
                </div>
            
            
            
            </header>

























       


    )


}

const HeaderStyle = {
    width: "100%",
    height: "60vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: 25,
    
}
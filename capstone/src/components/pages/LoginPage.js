import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/Chrismas1.png'

import '../../App.css'

export default function SignInPage() {
    return (
        <header style={HeaderStyle}>

            <div className="wrapper">
                <header>Login Form</header>
                <form action="#">
                    <div className="field email">
                        <div className="input-area">
                            <input type="text" placeholder="Email Address"></input>
                                <i className="fas fa-envelope"></i>
                                <i className="fas fa-exclamation-circle"></i>
                        </div>
                        <div className="error-txt"> Email can't be blank</div>
                        <div className="field password">
                            <div className="input-area">
                                <input type="password" placeholder="Password"></input>
                                    <i className="fas fa-lock"></i>
                                    <i className="fas fa-exclamation-circle"></i>
                            </div>
                            <div className="error-txt">Password cant be blank</div>
                        </div>
                        <div className="pass-link"><a href="#">Forgot password</a></div>
                    </div>
                </form>
                </div>
            

            </header>

























       


    )


}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
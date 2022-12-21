import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/pink.png'
import PillowImage from '../../assets/images/pillowLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../../App.css'

export default function SignInPage() {
    return (
        <header style={HeaderStyle}>

            <div className="searchbar-header">
                <div className="topnav">

                    <a class="active" href="/home">Home</a>
                    <a href="/register">Sign Up</a>
                   
                    {/* <input type="search" id="search" placeholder="Search" /> */}
                </div>



            </div>

            <div className="wrapper">


                <img src={PillowImage} alt="pillow"></img>

                <h2>Welcome To Pillow</h2>

                <form action="/login">
                    <p>
                        <div className="user-container">
                            <input type="text" name="first_name" required placeholder=" Email..." />
                        </div>
                    </p>
                    <p>

                        <div className="pass-container">
                            <input type="password" name="password" placeholder="Password..." required />
                        </div>
                        <div>
                            <Link to="/forget-password"><label className="right-label">Forgot your password?</label></Link>
                        </div>
                    </p>
                    <p>
                        <button id="sub_btn" type="submit">Login</button>




                        <a href="www.google.com">
                            <FontAwesomeIcon icon={faFacebook} className="icon-container" />
                        </a>
                        <a href="www.facebook.com">
                            <FontAwesomeIcon icon={faInstagram} className="icon-container" />
                        </a>
                        <a href="www.facebook.com">
                            <FontAwesomeIcon icon={faTwitter} className="icon-container" />
                        </a>
                    </p>
                </form>
                <footer>
                    <p>First time? <Link to="/register">Create an account</Link>.</p>
                    
                </footer>
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
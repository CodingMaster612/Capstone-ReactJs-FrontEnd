import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/white.png'
import PillowImage from '../../assets/images/pillowLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../../App.css'

export default function SignInPage() {
    return (
        <header style={ HeaderStyle }>
       
       <div className="wrapper">
            
        
            <img src={PillowImage} alt="pillow"></img>
            
            <h2>Welcome To Pillow</h2>
            <form action="/login">
                <p>
                   <div className="user-container">
                    <input type="text" name="first_name" required  placeholder=" Email..."/>
                    </div>
                </p>
                <p>
                    
                    <div className="pass-container">
                    <input type="password" name="password"  placeholder="Password..."required />
                    </div>
                    <div>
                    <Link to="/forget-password"><label className="right-label">Forget  your password?</label></Link>
                    </div>
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                    
                    
                    
                    
                    <a href="https://www.facebook.com">
                        <FontAwesomeIcon icon={faFacebook}  className="icon-container"/>
                    </a>
                    <a href="https://www.instagram.com">
                        <FontAwesomeIcon icon={faInstagram}className="icon-container"/> 
                    </a>
                    <a href="https:/www.twitter.com">
                        <FontAwesomeIcon icon={faTwitter} className="icon-container"/> 
                    </a>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
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
import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/pink.png'
import PillowImage from '../../assets/images/pillowLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../../App.css'

export default function SignUpPage() {

    return (

         <header style={ HeaderStyle }>
        <div className="wrapper">
            
            <img src={PillowImage} alt="pillow"></img>
            <div className="sign-up">
            <h2>Sign Up Today</h2>
            </div>
           
            {/* <h5>Enjoy Access to the revolutionary Currency Converter</h5> */}
            
            <form action="/home">
            <div className="user-container">
                <p>
                
                    <input type="text" name="first_name" placeholder="Username..." required />
                    
                </p>
                <p>
                   
                    <input type="email" name="email" placeholder="Email.." required />
                    
                </p>
                </div>
                <p>
                <div className="pass-container">
                    <input type="password" name="password"placeholder="Password..."  requiredc />
                    </div>
                </p>
                
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
                <a>
                        <FontAwesomeIcon icon={faFacebook}  className="icon-container"/>
                    </a>
                    <a>
                        <FontAwesomeIcon icon={faInstagram}className="icon-container"/> 
                    </a>
                    <a>
                        <FontAwesomeIcon icon={faTwitter} className="icon-container"/> 
                    </a>
            </form>
            <footer>
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
import React from 'react'
import BackgroundImage from '../../assets/images/pink.png'
import PillowImage from '../../assets/images/pillowLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../../App.css'

export default function SignUpPage() {

    return (

         <header style={ HeaderStyle }>
        
        <div className="searchbar-header">
                <div className="topnav">

                    <a class="active" href="/home">Home</a>
                    
                   
                    {/* <input type="search" id="search" placeholder="Search" /> */}
                </div>
        
        
        </div>
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
                <a href="www.facebook.com">
                        <FontAwesomeIcon icon={faFacebook}  className="icon-container"/>
                    </a>
                    <a href="www.instagram.com">
                        <FontAwesomeIcon icon={faInstagram}className="icon-container"/> 
                    </a>
                    <a href="www.linkedin.com">
                        <FontAwesomeIcon icon={faTwitter} className="icon-container"/> 
                    </a>
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
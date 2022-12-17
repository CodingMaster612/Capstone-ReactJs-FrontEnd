import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/white.png'

import '../../App.css'

export default function SignUpPage() {

    return (
        // <div className="m-5-auto">
        <header style={ HeaderStyle }>
            <div className="wrapper">
                
                <form action="/home">

                    <div className="credentials-user">
                        <p>
                           
                            <input type="text" name="first_name"  className="my-text" placeholder="Enter your username..." required />
                        </p>



                        <p>
                           
                            <input type="email" name="email" className="my-text" placeholder=" Enter your email Address..."required />
                        </p>

                    </div>
                    <div className="credentials-pass">
                        <p>
                            
                            <input type="password" name="password" className="my-text"  placeholder="Enter your password..."required />
                        </p>

                    </div>
                    {/* <p>
                        <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                    </p> */}
                    <div className="btn-submit">
                    <p>
                        <button  type="submit" className="btn-text">Register</button>
                    </p>
                    </div>
                </form>
                <div className="account-footer">
                {/* <footer>
                    <p><Link to="/">Homepage</Link></p>
                </footer> */}
                </div>
            {/* </div> */}
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
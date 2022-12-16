import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <div className="wrapper">
            <div className="change-text">
            <h2>Sign in to us</h2>
            </div>
            <form action="/home">
                
                <div className= "credentials-user">
                <p>
                    <label>Username or email address</label><br/>
                    
                    <input type="text" name="first_name" required />
                   
                </p>
                </div>
                <p>
                    <div className="credentials-pass">
                    <label>Password</label>
                    </div>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
               
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
            </div>
            
        </div>
    )
}
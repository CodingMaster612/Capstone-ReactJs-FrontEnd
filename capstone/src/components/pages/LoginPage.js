import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <div className="wrapper">
            <div className="change-text">
            <h2></h2>
            </div>
            <form action="/home">
                
                <div className= "credentials-user">
                <p>
                    <label></label><br/>
                    
                    <input type="text" name="first_name"  className="my-text" required />
                   
                </p>
                </div>
                <div className="credentials-pass">
                <p>
                    
                    <label></label>
                    
                    <Link to="/forget-password"><label className="right-label"></label></Link>
                    <br/>
                    <input type="password" name="password"  className="my-text"required />
                </p>
                </div>
                
                <div className="btn-submit">
                <p>
                    <button type="submit" className="btn-text">Login</button>
                </p>
                </div>
            </form>
            
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
            </div>
            
        </div>
    )
}
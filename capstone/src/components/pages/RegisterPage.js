import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="m-5-auto">
            <div className="wrapper">
                <h2>Join us</h2>
                <h5>Create your personal account</h5>
                <form action="/home">

                    <div className="credentials-user">
                        <p>
                           
                            <input type="text" name="first_name"  className="my-text"required />
                        </p>



                        <p>
                           
                            <input type="email" name="email" className="my-text" required />
                        </p>

                    </div>
                    <div className="credentials-pass">
                        <p>
                            
                            <input type="password" name="password" className="my-text" required />
                        </p>

                    </div>
                    <p>
                        <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                    </p>
                    <p>
                        <button id="sub_btn" type="submit" className="my-text">Register</button>
                    </p>
                </form>
                <footer>
                    <p><Link to="/">Back to Homepage</Link>.</p>
                </footer>
            </div>
        </div>
    )

}
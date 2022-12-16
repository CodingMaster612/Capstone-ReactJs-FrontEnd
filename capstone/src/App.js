import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './components/pages/LandingPage.js'
import LoginPage from './components/pages/LoginPage.js'
import RegisterPage from './components/pages/RegisterPage.js'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage.js'
import HomePage from './components/pages/HomePage.js'

import './App.css'

export default function App() {
    return (
       
       <BrowserRouter>
       
       
            
                <Routes>
                    <Route exact path="/" element={< LandingPage/> } />
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/register" element={< RegisterPage/> } />
                    <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
                    <Route path="/home" element={ <HomePage/> } />
                </Routes>
                
            


        

</BrowserRouter>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Designed & coded by <a href="https://izemspot.netlify.com" target="_blank" rel="noopener noreferrer">IZEMSPOT</a></p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}
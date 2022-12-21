// import { React } from "react";
import React from "react";

import { Link } from 'react-router-dom'
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHouse, faUser, faBars, faWallet } from "@fortawesome/free-solid-svg-icons";
import '../../App.css'
import BackgroundImage from '../../assets/images/pink2.png'
export default function HomePage() {














   return (
      <header style={HeaderStyle}>
         <div className="searchbar-header">

            <Link to="/home">
               <div className="icon-home">
                  <FontAwesomeIcon icon={faHouse} />
               </div>
            </Link>
            <div>
               <Link to="/profile">
                  <div className="icon-profile">
                     <FontAwesomeIcon icon={faUser} />
                  </div>
               </Link>
            </div>

            <div>
               <Link to="/list">
                  <div className="icon-bar">
                     <FontAwesomeIcon icon={faBars} />
                  </div>
               </Link>
            </div>
            <div>
               <Link to="/wallet">
                  <div className="icon-wallet">
                     <FontAwesomeIcon icon={faWallet} />
                  </div>
               </Link>
            </div>

         </div>
         <div className="main">
            <div className="icon">
               <FontAwesomeIcon icon={faSearch} />
            </div>


            <div className="search">

               <TextField id="outlined-basic" variant="outlined" fullWidth label="Search" />

            </div>
            <Link to="/login">
                  <div className="icon-login">
                     <FontAwesomeIcon icon={faWallet} />
                  </div>
               </Link>
               <Link to="/register">
                  <div className="icon-register">
                     <FontAwesomeIcon icon={faWallet} />
                  </div>
               </Link>
               <Link to="/logout">
                  <div className="icon-logout">
                     <FontAwesomeIcon icon={faWallet} />
                  </div>
               </Link>

         <div>


         </div>

         <div className="box">

         </div>




      </div>



      </header >
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
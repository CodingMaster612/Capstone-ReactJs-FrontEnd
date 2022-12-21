// import { React } from "react";
import React from "react";

import { Link } from 'react-router-dom'
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHouse, faUser, faBars, faWallet, faChartSimple, faDownload } from "@fortawesome/free-solid-svg-icons";
import '../../App.css'
import BackgroundImage from '../../assets/images/pink2.png'
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
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
            <Link to="/chart">
                  <div className="icon-bitcoin">
                     <FontAwesomeIcon icon={faBitcoin} />
                  </div>
               </Link>
               <Link to="/currency">
                  <div className="icon-chart">
                     <FontAwesomeIcon icon={faChartSimple} />
                  </div>
               </Link>
               <Link to="/download">
                  <div className="icon-download">
                     <FontAwesomeIcon icon={faDownload} />
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
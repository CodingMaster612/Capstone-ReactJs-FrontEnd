import { React} from "react";
import { Link } from 'react-router-dom'

import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch , faHouse} from "@fortawesome/free-solid-svg-icons";
import '../../App.css'
import BackgroundImage from '../../assets/images/pink2.png'
export default function HomePage() {
return (
<header style={HeaderStyle}>
   <div className="searchbar-header">
      {/* <div className="topnav">
         <a className="active" href="/home">Place holder</a>
         <a  href="/home">Place Holder</a> */}
         <Link to="/home">
         <div className="icon-home">
         <FontAwesomeIcon icon={faHouse}/>
         </div>
         </Link>
         {/* insert icons into header */}
      {/* </div> */}
   </div>
   <div className="main">
      <div className="icon">
         <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className="search">
         {/* add search filter here as an input tag */}
         <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search"
            />
      </div>
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
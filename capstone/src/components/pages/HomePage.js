import { React} from "react";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from "@fortawesome/free-solid-svg-icons";


import '../../App.css'

import BackgroundImage from '../../assets/images/pink2.png'

export default function HomePage() {


    return (

        <header style={HeaderStyle}>
            <div className="searchbar-header">
                <div className="topnav">

                    <a class="active" href="/home">Place holder</a>
                    <a  href="/home">Place Holder</a>
                    


                </div>


            </div>

            <div className="main">
            <div className="icon">
                
                <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className="search">
                
                    
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


import React from "react";
import "../Styles/Style.css";
import { Link } from "react-router-dom";




function Header() {
        return (

                <div className="Header" >
                        <Link to="/Home">
                                <h1 className="heading"> Top <br />Genius <br /> laureates</h1>

                        </Link>

                </div>

        )
}

export default Header;



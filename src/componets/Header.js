import React, {useState,useEffect} from "react";
import HeadLogo from "./images/logo-makeMeAzulOscuro.png"


import "./Header.css"
import { Link } from "react-router-dom";

const Header = ()=>{

    return(
        <Link to={"/"}>
            <div className="headbar-main-container">
                <div className="headbar-child1-container">
                    <img src={HeadLogo} alt=""  id="Headbar-logo-namerestaurant"/>
                    <div id="header-para">
                        <p id="header-para-p">ALL IN ONE</p>
                    </div>
                </div>
                <div className="headbar-child1-container  headbar-child2-container"></div>
            </div>
        </Link>
    )
}


export default Header;
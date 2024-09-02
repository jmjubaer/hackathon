import React from "react";
import "./Header.css";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className='bg-white'>
            <div className='header_container'>
                <Link to={"/"}>
                    <img src={logo} />
                </Link>
            </div>
        </div>
    );
};

export default Header;

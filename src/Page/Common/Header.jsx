import React from "react";
import "./Header.css";
import logo from "../../assets/Logo.png";
const Header = () => {
    return (
        <div className='bg-white'>
            <div className='header_container'>
                <img src={logo} />
            </div>
        </div>
    );
};

export default Header;

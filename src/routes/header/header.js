import React from 'react';
import logo from '../../spacex_logo.svg';
import "./header.styles.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header navbar-expand-sm navbar-light navbar">
            <div className="logo-container">
                <Link href="/">
                    <img src={logo} alt="Logo" width="50" height="50"/>
                </Link>
            </div>
            <div>
                <Link className="btn btn-flat" href="#">Login</Link>
            </div>
        </div>
    );
};

export default Header;

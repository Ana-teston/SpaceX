import React from 'react';
import logo from '../../spacex_logo.svg';
import SearchBox from '../search/search';
import "./header.styles.css";

const Header = ({onSearch}) => {
    return (
        <div className="header navbar-expand-sm navbar-light navbar">
            <div className="logo-container">
                <a href="/">
                    <img src={logo} alt="Logo" width="50" height="50"/>
                </a>
            </div>
            <div className="navbar">
                <SearchBox placeholder="Search Launches..." onChangeHandler={onSearch}/>
            </div>
            <div>
                <a className="btn btn-flat" href="#">Login</a>
            </div>
        </div>
    );
}

export default Header;

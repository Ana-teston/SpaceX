import React from 'react';
import logo from '../../spacex_logo.svg';
import SearchBox from '../search/search';
import "./header.styles.css"

const Header = ({ onSearch }) => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" width="50" height="50" />
      </div>
      <SearchBox placeholder="Search Launches..." onChangeHandler={onSearch} />
    </div>
  );
}

export default Header;

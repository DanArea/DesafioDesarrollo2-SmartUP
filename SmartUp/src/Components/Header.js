import React from 'react';
import './Header.css';
import logo from '../logo.webp'; 

const Header = () => {
    return (
        <div className="header-container">
<a href="./">
  <img src={logo} alt="Logo de The Strainer Co." className="header-logo"/>
</a>
            <h1 className="header-title"></h1>
        </div>
    );
}

export default Header;
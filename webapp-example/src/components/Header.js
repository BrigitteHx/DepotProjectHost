import React from 'react';
import { Link } from 'react-router-dom'; // Importeer de Link component van react-router-dom
import logo from './images/logo.png'; // Logo afbeelding
import './style/Header.css'; // Zorg ervoor dat je de juiste stijlen importeert
import DropdownMenu from './DropDownMenu'; // Importeer het dropdown-menu

const Header = () => {
  return (
    <div className="navbar">
      <a href="/">
        <img className="logo" src={logo} alt="logo" />
      </a>

      <div className="headerMenu">
        <div className="rightMenu">
          <ul>
            {/* Standaard links (eventueel voor desktop of andere doeleinden) */}
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/info">Information</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/about_us">About Us</Link></li>
            <li><Link to="/welcome">Welcome</Link></li>
          </ul>
        </div>
      </div>

      {/* Voeg hier het dropdown-menu toe */}
      <DropdownMenu /> 
    </div>
  );
};

export default Header;

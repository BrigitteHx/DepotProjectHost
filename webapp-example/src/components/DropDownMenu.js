import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/DropdownMenu.css'; // Zorg ervoor dat je de juiste stijlen importeert

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="dropdown-menu">
      <div className="menu-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
        <Link to="/home" className="menu-item" onClick={toggleMenu}>Home</Link>
        <Link to="/info" className="menu-item" onClick={toggleMenu}>Information</Link>
        <Link to="/FAQ" className="menu-item" onClick={toggleMenu}>FAQ</Link>
        <Link to="/about_us" className="menu-item" onClick={toggleMenu}>About Us</Link>
        <Link to="/welcome" className="menu-item" onClick={toggleMenu}>Welcome</Link>
      </div>
    </div>
  );
};

export default DropdownMenu;

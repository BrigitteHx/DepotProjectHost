import React from 'react';
import { Link } from 'react-router-dom'; // Importeer de Link component voor navigatie
import './style/Home.css'; // Zorg ervoor dat je de juiste CSS-stijlen toevoegt

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to the showcase of the web app for the Solar Panel Simulation.</h1>
        <p>This showcase features a selection of pages to give you an idea of how the app will look online. We have intentionally chosen to display only these pages to ensure that sensitive pages, such as the dashboards and their functionalities, are not accessible online. In this showcase, we present the information, FAQ, about us, and welcome pages. Additionally, we have included a small demo of the menu, giving you a preview of how it will function and appear within the app.</p>
        
        {/* Navigatie knoppen */}
        <div className="button-group">
          <Link to="/info" className="button">Information</Link>
          <Link to="/faq" className="button">FAQ</Link>
          <Link to="/about_us" className="button">About Us</Link>
          <Link to="/welcome" className="button">Welcome</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

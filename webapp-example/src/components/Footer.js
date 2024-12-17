import React from 'react';
import './style/Footer.css'; // Zorg ervoor dat je de juiste stijlen importeert
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <div className='footerContainer'>
        <div className='socialIcons'>
          <a href='#'><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href='#'><FontAwesomeIcon icon={faInstagram} /></a>
          <a href='#'><FontAwesomeIcon icon={faXTwitter} /></a>
          <a href='#'><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>

        <div className='footerNav'>
          <ul>
            <li><a href='/home'>Home</a></li>
            <li><a href='/info'>Information</a></li>
            <li><a href='/faq'>FAQ</a></li>
            <li><a href='/about_us'>About Us</a></li>
            <li><a href='/welcome'>Welcome</a></li>
          </ul>
        </div>

      </div>

      <div className='footerBottom'>
        <p>Copyright &copy;2024; Solar Panel Simulation</p>
      </div>
    </footer>
  );
};

export default Footer;

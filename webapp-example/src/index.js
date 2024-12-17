import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Zorg ervoor dat de router hier zit
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* BrowserRouter hier om te omhullen */}
    <App />
  </BrowserRouter>
);

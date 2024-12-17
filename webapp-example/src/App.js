import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importeer Routes en Route van react-router-dom
import Header from './components/Header'; // Header component
import Footer from './components/Footer'; // Footer component
import Home from './pages/Home'; // Zorg ervoor dat deze pagina bestaat
import Info from './pages/Info'; // Info.js als Information
import FAQ from './pages/FAQ'; // FAQ.js
import AboutUs from './pages/About'; // Stel dat deze pagina bestaat
import Welcome from './pages/Welcome'; // Stel dat deze pagina bestaat

function App() {
  return (
    <div>
      {/* Header component met dropdownmenu */}
      <Header />

      {/* Hoofdpagina's voor verschillende routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about_us" element={<AboutUs />} /> {/* Nieuwe route toegevoegd */}
        <Route path="/welcome" element={<Welcome />} /> {/* Nieuwe route toegevoegd */}
        {/* Voeg hier meer routes toe als je die hebt */}
      </Routes>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;

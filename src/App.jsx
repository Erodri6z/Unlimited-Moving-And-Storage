
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './styles/app.css';


import Nav from './components/nav/nav'
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App () {
  return (
    <main>
      <Nav className="Nav-bar" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
    
  )
}

export default App;

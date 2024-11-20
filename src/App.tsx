import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import ContactUs from './ContactUs';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import restlogoImage from './assets/Images/restlogo.png';



function App() {
  return (
    <Router>
      <header className="header">
      <img src={restlogoImage} alt="El Frijolito logo" className="logo" />
        {/* <img src={restlogoImage} alt="Central Valley farmland" className="hero-image" /> */}
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact-us">Contact Us</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
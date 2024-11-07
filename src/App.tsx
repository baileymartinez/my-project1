// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './Home';
// import Menu from './Menu';
// import About from './About';
// import ContactUs from './ContactUs';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <header className="header">
//         <img src="/assets/Images/restlogo.png" alt="El Frijolito logo" className="logo" />
//         <nav className="navbar">
//           <Link to="/">Home</Link>
//           <Link to="/menu">Menu</Link>
//           <Link to="/about">About</Link>
//           <Link to="/contact-us">Contact Us</Link>
//         </nav>
//       </header>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact-us" element={<ContactUs />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import ContactUs from './ContactUs';
import logo from './assets/Images/restlogo.png'; // First gallery image
import './App.css';

function App() {
  return (
    <Router>
      <header className="header">
        {/* If logo is in public/assets/Images, use this path */}
        <img src="/assets/Images/restlogo.png" alt="El Frijolito logo" className="logo" />
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
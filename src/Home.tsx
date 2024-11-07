// import React from 'react';

// const Home: React.FC = () => {
//   return <h2>Welcome to the Home Page</h2>;
// };

// export default Home;

import React from 'react';
import './Home.css';
import headerImage from './assets/Images/header.png'; // Hero section image
import tacosImage from './assets/Images/tacos.png'; // First menu favorite image
import food2Image from './assets/Images/food2.png'; // Second menu favorite image
import food3Image from './assets/Images/food3.png'; // Third menu favorite image
import fam1Image from './assets/Images/fam1.png'; // First gallery image
import fam2Image from './assets/Images/fam2.png'; // Second gallery image
import fam3Image from './assets/Images/fam3.png'; // Third gallery image

const Home: React.FC = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <img src={headerImage} alt="Central Valley farmland" className="hero-image" />
        <div className="hero-text">
          <h2>Made with the freshest fruit of the Central Valley</h2>
        </div>
      </section>

      {/* Menu Favorites Section */}
      <section className="menu-favorites">
        <h3>Menu Favorites</h3>
        <div className="favorites-gallery">
          <img src={tacosImage} alt="Favorite dish 1" className="favorite-image" />
          <img src={food2Image} alt="Favorite dish 2" className="favorite-image" />
          <img src={food3Image} alt="Favorite dish 3" className="favorite-image" />
        </div>
        <button className="view-menu-button">View Full Menu</button>
      </section>

      {/* Image Gallery Section */}
      <section className="image-gallery">
        <h3>Image Gallery</h3>
        <div className="gallery">
          <img src={fam1Image} alt="Gallery image 1" className="gallery-image" />
          <img src={fam2Image} alt="Gallery image 2" className="gallery-image" />
          <img src={fam3Image} alt="Gallery image 3" className="gallery-image" />
        </div>
        <button className="view-gallery-button">View all photos</button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-section">
          <h4>Visit Us</h4>
          <p>123 Central Valley Rd, California</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@elfrijolito.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-social">
          <p>Connect with us</p>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
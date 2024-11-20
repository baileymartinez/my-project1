import React from 'react';
import "./about.css";

const About: React.FC = () => {
    return (
        <div className="about">
          {/* About Us Section */}
          <section className="about-section">
            <h1>About Us</h1>
            <div className="about-content">
              <div className="text-content">
                <h2>El Frijolito</h2>
                <p>A restaurant based in the Central Valley...</p>
                <p>Established in 2000 by</p>
              </div>
              <div className="image-content">
                <div className="about-image"></div>
              </div>
            </div>
          </section>
    
          {/* Meet the Crew Section */}
          <section className="crew-section">
            <h2>Meet the Crew</h2>
            <div className="crew-container">
              <div className="crew-member"></div>
              <div className="crew-member"></div>
              <div className="crew-member"></div>
              <div className="crew-member"></div>
            </div>
          </section>
        </div>
      );
    };
    
    export default About;
import React from 'react';
import "./footer.css"

const Footer = () => {

    return(
        <footer className="app-footer">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="logo192.png" alt="Emergency Service App Logo"/>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="faqs">
          <p>      </p>
        </div>
      </footer>
    )
};
export default Footer;
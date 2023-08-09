import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="logo192.png" alt="Emergency Service App Logo" />
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">Support</Link>
            </li>
            <li>
              <Link to="/faqs">FAQS</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="faqs">
        <p> </p>
      </div>
    </footer>
  );
};
export default Footer;

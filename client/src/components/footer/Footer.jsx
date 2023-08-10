import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="app-footer mt-5">
      <div className="footer-top">
        <div className="footer-logo">
          <h4 className="h4">Emergency Support</h4>
        </div>
        <div className="footer-links">
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

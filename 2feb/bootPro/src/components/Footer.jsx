import React from 'react';
import { FiInstagram } from "react-icons/fi";
import { FaTwitter, FaFacebook } from "react-icons/fa";



 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Space World © 2025 . All rights reserved.</p>
        <div className="social-links">
          <a href="#" className="social-link">Facebook</a><FaFacebook />
          <a href="#" className="social-link">Twitter</a><FaTwitter />
          <a href="#" className="social-link">Instagram</a><FiInstagram />
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
          

        </div>
      </div>
    </footer>
  );
};

export default Footer;
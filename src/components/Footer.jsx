import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-overlay">

        <div className="footer-left">
          <img src="/logo.png" alt="Coffee & Love" className="footer-logo" />
        </div>

        <div className="footer-links">

          <div className="footer-column">
            <h4>BUSINESS</h4>
            <p>Food Services</p>
            <p>Office Coffee Solution</p>
            <p>Public Location</p>
            <p>Direct to Consumer</p>
          </div>

          <div className="footer-column">
            <h4>PRODUCTS</h4>
            <p>Coffee Machines</p>
            <p>Powder to Cup - Filter</p>
            <p>Roast and Ground</p>
            <p>Decoction/Capsules</p>
          </div>

        </div>

        <div className="footer-right">
          <img src="/images/coffee cup.jpg" alt="Coffee Cup" className="footer-cup" />
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Coffee & Love — All rights reserved.</p>
      </div>
    </footer>
  );
}

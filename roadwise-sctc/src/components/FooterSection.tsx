import React from 'react';
import './FooterSection.css';

const FooterSection = () => (
  <footer className="footer-section">
    <div className="footer-main">
      <div className="footer-logo-block">
        <span className="footer-logo">⇄</span>
        <span className="footer-brand">Etran</span>
      </div>
      <div className="footer-contact">
        <div>Contact</div>
        <div>hello@figma.com</div>
        <div>Instagram</div>
        <div>X</div>
        <div>LinkedIn</div>
      </div>
    </div>
    <div className="footer-bottom">
      <span>Terms & Conditions</span>
      <span>Privacy</span>
    </div>
  </footer>
);

export default FooterSection; 
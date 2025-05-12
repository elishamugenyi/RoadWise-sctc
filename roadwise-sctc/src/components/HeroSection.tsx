import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
          alt="Happy person using app"
          className="hero-image"
        />
        <div className="hero-badge badge-interest">Interest earned!</div>
        <div className="hero-badge badge-money">Money sent!</div>
        <div className="hero-badge badge-payment">Payment received!</div>
      </div>
      <div className="hero-tagline">
        We escalate transfer efficiency<br />and productivity
      </div>
    </section>
  );
};

export default HeroSection; 
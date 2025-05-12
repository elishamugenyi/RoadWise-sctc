import React from 'react';
import './ReliableAppSection.css';

const ReliableAppSection = () => (
  <section className="reliable-section">
    <h2 className="reliable-title">The Most Reliable App</h2>
    <div className="reliable-cards">
      <div className="reliable-card">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
          alt="Virtual card"
          className="reliable-img"
        />
        <div className="reliable-caption">
          <strong>Scale Your Team, Not Your Card Expenses</strong><br />
          Issue virtual and physical cards at no additional cost to support teams of any size.
        </div>
      </div>
      <div className="reliable-card">
        <img
          src="https://images.unsplash.com/photo-1588776814546-ec7e1b1b1b1b?auto=format&fit=crop&w=400&q=80"
          alt="Tax form"
          className="reliable-img"
        />
        <div className="reliable-caption">
          <strong>Effortless Paper Tracking, Mobile Convenience</strong><br />
          Get precise control—at scale—with the ability to lock any card and restrict any type of spend.
        </div>
      </div>
    </div>
  </section>
);

export default ReliableAppSection; 
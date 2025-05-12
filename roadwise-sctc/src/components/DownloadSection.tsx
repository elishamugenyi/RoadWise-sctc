import React from 'react';
import './DownloadSection.css';

const DownloadSection = () => (
  <section className="download-section">
    <div className="download-bg">
      <img
        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
        alt="Person using phone"
        className="download-img"
      />
      <div className="download-content">
        <div className="download-title">Download Etran and manage everything from your phone.</div>
        <button className="download-btn">Get started</button>
      </div>
    </div>
  </section>
);

export default DownloadSection; 
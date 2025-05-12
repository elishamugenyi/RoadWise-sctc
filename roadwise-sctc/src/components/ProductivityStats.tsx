import React from 'react';
import './ProductivityStats.css';

const ProductivityStats = () => (
  <section className="productivity-section">
    <h2 className="productivity-title">Get More Done In A Week</h2>
    <p className="productivity-desc">Maximize your productivity with smarter tools designed to streamline your workflow to automate tasks, stay organized</p>
    <div className="productivity-grid">
      <div className="stat-card stat-double">
        <div className="stat-value">2x</div>
        <div className="stat-label">Double Your Productivity</div>
      </div>
      <div className="stat-card stat-efficiency">
        <div className="stat-bar"></div>
        <div className="stat-label">Efficiency Increase Per Transfer</div>
      </div>
      <div className="stat-card stat-centralize">
        <div className="stat-icon">⇄</div>
        <div className="stat-label">Centralize Your Finances</div>
      </div>
      <div className="stat-card stat-activity">
        <div className="stat-value">130%</div>
        <div className="stat-label">More Activity</div>
      </div>
    </div>
  </section>
);

export default ProductivityStats; 
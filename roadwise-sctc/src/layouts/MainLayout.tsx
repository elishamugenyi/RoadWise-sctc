import React from 'react';
import './MainLayout.css';

interface MainLayoutProps {
  children?: any;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <aside className="sidebar">
        {/* Sidebar content will be added here */}
        <div className="logo-section">
          <span className="logo-icon">⇄</span>
          <span className="logo-text">Etran</span>
        </div>
        <button className="get-started-btn">Get started</button>
        <h2 className="sidebar-title">Money Transfers Made Simple</h2>
        <p className="sidebar-desc">No personal credit checks or founder guarantee.</p>
        <div className="offerings">
          <div className="offering-card"> <span>⚡</span> <div>Instant Productivity</div> </div>
          <div className="offering-card"> <span>🌐</span> <div>Expense Management</div> </div>
          <div className="offering-card"> <span>✅</span> <div>Advanced Technology</div> </div>
        </div>
        <div className="sidebar-footer">
          <span>Contact</span> <span>Social</span> <span>Address</span> <span>Legal Terms</span>
        </div>
      </aside>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default MainLayout; 
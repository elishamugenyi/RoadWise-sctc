import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.png" alt="Roadwise Logo" className="navbar-logo-image" />
        Roadwise
      </div>
      <div className="navbar-links">
        <a href="/dashboard" className="navbar-link">Dashboard</a>
        <a href="/my-reports" className="navbar-link">My Reports</a>
        <a href="/live-map" className="navbar-link">Live Map</a>
      </div>
      <div className="navbar-right">
        <div className="navbar-notification">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </div>
        <div className="navbar-avatar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <div className="navbar-dropdown">
            <a href="/profile" className="navbar-dropdown-item">Profile</a>
            <a href="/settings" className="navbar-dropdown-item">Settings</a>
            <a href="/logout" className="navbar-dropdown-item">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

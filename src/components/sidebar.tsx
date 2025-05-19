import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <a href="/" className="sidebar-link">Home</a>
        </li>
        <li className="sidebar-item">
          <a href="/submit-report" className="sidebar-link">Submit Report</a>
        </li>
        <li className="sidebar-item">
          <a href="/my-reports" className="sidebar-link">My Reports</a>
        </li>
        <li className="sidebar-item">
          <a href="/traffic-analytics" className="sidebar-link">Traffic Analytics</a>
        </li>
        <li className="sidebar-item">
          <a href="/settings" className="sidebar-link">Settings</a>
        </li>
        <li className="sidebar-item">
          <a href="/help" className="sidebar-link">Help / Contact Support</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

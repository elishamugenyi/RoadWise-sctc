import { useNavigate } from 'react-router-dom';
import './homePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="rw-home-root">
      <div className="rw-home-left">
        <div className="rw-logo">
          <img src="/roadwise-2.png" alt="roadwise logo"
          />
        </div>
        <div className="rw-tagline">Smart Traffic, Safer Roads</div>
        <div className="rw-desc">Real-time traffic, alerts, and reporting for your city. Stay ahead, stay safe.</div>
        <button className="rw-login-btn" onClick={() => navigate('/loginPage')}>Login</button>
        <div style={{marginTop: '1.5rem'}}>
          <button className="rw-map-btn" onClick={() => navigate('/createAccount')}>Create Account</button>
          <button className="rw-map-btn" style={{marginLeft: '0.5rem'}} onClick={() => navigate('/forgot-password')}>Forgot Password?</button>
        </div>
      </div>
      <div className="rw-home-right">
        <div className="rw-map-container">
          <div className="rw-map-search-bar">
            <input type="text" placeholder="Search cities..." />
            <button className="rw-map-btn">Get Alerts</button>
            <button className="rw-map-btn">Send Report</button>
          </div>
          <iframe
            title="Simple Map"
            src="https://www.openstreetmap.org/export/embed.html"
            className="rw-map-iframe"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

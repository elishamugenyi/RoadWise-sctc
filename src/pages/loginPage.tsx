//import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="login-split-page">
      <div className="login-left">
        <h2 className="login-welcome"><b>Welcome to<br />Roadwise Platform</b></h2>
        <p className="login-desc">Here you can create and manage your profile, see traffic, get alerts, and more.</p>
        <img src="logo.png" alt="Welcome Illustration" className="login-illustration" />
      </div>
      <div className="login-right">
        <form className="login-form">
          <input type="email" placeholder="Email" className="login-input login-bg" />
          <div className="login-password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="login-input login-bg"
            />
            <span className="login-eye-icon" onClick={() => setShowPassword(v => !v)}>
              {showPassword ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3a4d00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3a4d00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.81 21.81 0 0 1 5.06-6.06"/><path d="M1 1l22 22"/><path d="M9.53 9.53A3 3 0 0 0 12 15a3 3 0 0 0 2.47-5.47"/></svg>
              )}
            </span>
          </div>
          <div className="login-links-row">
            <Link to="/forgot-password" className="login-link">Forgot password?</Link>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="login-divider-row">
          <div className="login-divider" />
          <span className="login-divider-text">or continue with</span>
          <div className="login-divider" />
        </div>
        <div className="social-login-row">
        <button className="social-button google">
            <img 
              src="https://www.google.com/s2/favicons?domain=google.com&sz=64" 
              alt="Google Logo" 
              className="social-logo" 
            />
            Google
          </button>
          <button className="social-button icloud">
            <img src="https://www.google.com/s2/favicons?domain=icloud.com&sz=64" alt="iCloud Logo" className="social-logo" />
            iCloud
          </button>
        </div>
        <div className="login-footer-row">
          Not registered yet? <Link to="/createAccount" className="login-link">Create an Account</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 
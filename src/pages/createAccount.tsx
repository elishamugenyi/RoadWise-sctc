import { useState } from 'react';
import './createAccount.css';

const CreateAccountPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  return (
    <div className="create-account-root">
      <div className="create-account-left">
        <div className="create-account-logo">Roadwise</div>
        <div className="create-account-tagline">Join Roadwise Today</div>
        <div className="create-account-desc">Create your account to access smart traffic alerts, reporting, and more. Stay safe, stay ahead.</div>
      </div>
      <div className="create-account-right">
        <div className="create-account-container">
          <h1 className="create-account-title">Create Your Account</h1>
          <form className="create-account-form">
            <input type="text" placeholder="Name" className="create-account-input ca-bg" />
            <input type="email" placeholder="Email" className="create-account-input ca-bg" />
            <div className="ca-password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="create-account-input ca-bg"
              />
              <span className="ca-eye-icon" onClick={() => setShowPassword(v => !v)}>
                {showPassword ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3a4d00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3a4d00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.81 21.81 0 0 1 5.06-6.06"/><path d="M1 1l22 22"/><path d="M9.53 9.53A3 3 0 0 0 12 15a3 3 0 0 0 2.47-5.47"/></svg>
                )}
              </span>
            </div>
            <div className="ca-password-wrapper">
              <input
                type={showRepeatPassword ? 'text' : 'password'}
                placeholder="Repeat Password"
                className="create-account-input ca-bg"
              />
              <span className="ca-eye-icon" onClick={() => setShowRepeatPassword(v => !v)}>
                {showRepeatPassword ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3a4d00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3a4d00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.81 21.81 0 0 1 5.06-6.06"/><path d="M1 1l22 22"/><path d="M9.53 9.53A3 3 0 0 0 12 15a3 3 0 0 0 2.47-5.47"/></svg>
                )}
              </span>
            </div>
            <input type="tel" placeholder="Phone Number" className="create-account-input ca-bg" />
            <button type="submit" className="create-account-button">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage; 
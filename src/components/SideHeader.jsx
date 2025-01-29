import React, { useState, useEffect } from 'react';
import './SideHeader.css';
import OnlinePlay from './OnlinePlay';
import { Link, useNavigate } from 'react-router-dom';

const SideHeader = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [showPlayOptions, setShowPlayOptions] = useState(false);
  const [comingSoon, setComingSoon] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const accepted = localStorage.getItem('privacyAccepted');
    if (!accepted) {
      setShowPrivacyModal(true);
    } else {
      setPrivacyAccepted(true);
    }
  }, []);

  const handleAcceptPrivacyPolicy = () => {
    localStorage.setItem('privacyAccepted', 'true');
    setPrivacyAccepted(true);
    setShowPrivacyModal(false);
  };

  return (
    <div className={`side-header ${showMenu ? 'expanded' : 'collapsed'}`}>
      <div className="hamburger-icon" onClick={toggleMenu}></div>
      <>
        <div className="vyuh-logo">
          <Link to="/">
            <img src="./h.PNG" alt="Vyuh Logo" className="logo-image" />
          </Link>
        </div>
        <div className="menu-options">
          <div
            className="menu-item"
            onClick={() => navigate('/play')}
          >
            <span className="menu-icon">🧩</span> Play Now
            {showPlayOptions && (
              <div className="dropdown-menu"></div>
            )}
          </div>
          <div className="menu-item" onClick={() => navigate("/learn")}>
            <span className="menu-icon">📘</span> Game Tutorial
          </div>
          <div className="menu-item" onClick={() => navigate("/partners")}>
            <span className="menu-icon">💰</span> Donation Vault
          </div>
          <div className="menu-item" onClick={() => navigate("/about")}>
            <span className="menu-icon">ℹ️</span> About Vyuh
          </div>
        </div>
      </>
      {showPrivacyModal && (
        <div className="privacy-modal">
          <div className="modal-content">
            <h2>Privacy Policy Acceptance</h2>
            <p>
              To continue using this site, you must accept our Privacy Policy. Please review it before proceeding.
            </p>
            <button onClick={handleAcceptPrivacyPolicy}>Accept Privacy Policy</button>
          </div>
        </div>
      )}
      <footer className="footer">
        <div className="footer-text">
          <Link to="/support">📥 Support</Link> |
          <Link to="/userAgreement">📜 User Agreement</Link> |
          <Link to="/privacyPolicy">🔐 Privacy Policy</Link>
        </div>
        <div className="footer-icons">
          <a href="https://x.com/Vyuha_?t=NKXgNuhpracHlIUOlXVfsw&s=08" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.youtube.com/@Vyuha-m1t" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://www.instagram.com/vyuh__?utm_source=qr&igsh=cmpmbnhxbnNjNDhq" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
        </div>
        <div className="footer-copyright">
          thevyuh.com © 2024
        </div>
      </footer>
    </div>
  );
};

export default SideHeader;

import React, { useState, useEffect } from 'react';
import './SideHeader.css';
import OnlinePlay from './OnlinePlay';

const SideHeader = ({ 
  onPlayClick, 
  onLearnClick, 
  onSupportClick, 
  onAboutClick, 
  onUserAgreementClick,
  onPrivacyPolicyClick, 
  onPartnersClick,
  OnlinePlayClick 
}) => {
  const [showMenu, setShowMenu] = useState(true);
  const [showPlayOptions, setShowPlayOptions] = useState(false);
  const [currentContent, setCurrentContent] = useState(null);
  const [comingSoon, setComingSoon] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false); 
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handlePlayClick = () => {
    setCurrentContent('play'); // Open Play.jsx
    if (onPlayClick) onPlayClick();
  };

  const handleLearnClick = () => {
    setCurrentContent('learn');
    if (onLearnClick) onLearnClick();
  };

  const handleSupportClick = () => {
    setCurrentContent('support');
    if (onSupportClick) onSupportClick();
  };

  const handleAboutClick = () => {
    setCurrentContent('about');
    if (onAboutClick) onAboutClick();
  };

  const handleUserAgreementClick = () => {
    setCurrentContent('userAgreement');
    if (onUserAgreementClick) onUserAgreementClick();
  };

  const handlePrivacyPolicyClick = () => {
    setCurrentContent('privacyPolicy');
    if (onPrivacyPolicyClick) onPrivacyPolicyClick();
  };

  const handlePartnersClick = () => {
    setCurrentContent('partners');
    if (onPartnersClick) onPartnersClick();
  };

  const handlePlayOnlineClick = () => {
    setCurrentContent('onlinePlay'); // Navigate to OnlinePlay page
    if (OnlinePlayClick) OnlinePlayClick();
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentContent(null);
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

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
      {showMenu && (
        <>
          <div className="vyuh-logo">
            <a href="/">
              <img src="./h.PNG" alt="Vyuh Logo" className="logo-image" />
            </a>
          </div>
          <div className="menu-options">
            <div
              className="menu-item"
              onMouseEnter={() => setShowPlayOptions(true)}
              onMouseLeave={() => setShowPlayOptions(false)}
              onClick={handlePlayClick}
            >
              <span className="menu-icon">🧩</span> Play Now
              {showPlayOptions && (
                <div className="dropdown-menu"></div>
              )}
            </div>
            <div className="menu-item" onClick={handleLearnClick}>
              <span className="menu-icon">📘</span> Game Tutorial
            </div>
            <div className="menu-item" onClick={handlePartnersClick}>
              <span className="menu-icon">💰</span> Donation Vault
            </div>
            <div className="menu-item" onClick={handleAboutClick}>
              <span className="menu-icon">ℹ️</span> About Vyuh
            </div>
          </div>
        </>
      )}
      <div className="main-content">
        {currentContent === null && (
          <>
            <img src="D.webp" alt="Custom Content" className="responsive-image" />
            <button className="play-button" onClick={handlePlayClick}>
             🏆 Play Now 🏆
            </button>
            <button className="play-online-button" onClick={handlePlayOnlineClick}>
              🎮 Play Online 🎮
            </button>
          </>
        )}
        {currentContent === 'onlinePlay' && <OnlinePlay />} {/* Render OnlinePlay */}
        {currentContent === 'play' && <div></div>}
        {currentContent === 'learn' && <div></div>}
        {currentContent === 'support' && <div></div>}
        {currentContent === 'about' && <div></div>}
        {currentContent === 'userAgreement' && <div>U</div>}
        {currentContent === 'privacyPolicy' && <div>P</div>}
        {currentContent === 'partners' && <div></div>}
      </div>
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
          <a href="#" onClick={(e) => { e.preventDefault(); handleSupportClick(); }}>📥 Support</a> |  
          <a href="#" onClick={(e) => { e.preventDefault(); handleUserAgreementClick(); }}>📜 User Agreement</a> |
          <a href="#" onClick={(e) => { e.preventDefault(); handlePrivacyPolicyClick(); }}>🔐 Privacy Policy</a>
        </div>
        <div className="footer-icons">
          <a href="https://www" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.youtube.com/@Vyuha-m1t" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
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

import React, { useState, useEffect } from 'react';
import './SideHeader.css';

const SideHeader = ({ 
  onPlayClick, 
  onLearnClick, 
  onSupportClick, 
  onAboutClick, 
  onUserAgreementClick,
  onPrivacyPolicyClick, 
  onPartnersClick 
}) => {
  const [showMenu, setShowMenu] = useState(true);
  const [showPlayOptions, setShowPlayOptions] = useState(false);
  const [currentContent, setCurrentContent] = useState(null);
  const [comingSoon, setComingSoon] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false); // New state for privacy acceptance
  const [showPrivacyModal, setShowPrivacyModal] = useState(false); // Modal state

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Handlers to show content
  const handlePlayClick = () => {
    setCurrentContent('play');
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

  // Function for "Play Online" button click
  const handlePlayOnlineClick = () => {
    setComingSoon(true);
  };

  // Back button functionality to reset to home page
  useEffect(() => {
    const handlePopState = () => {
      setCurrentContent(null);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Effect to check if privacy policy was accepted
  useEffect(() => {
    const accepted = localStorage.getItem('privacyAccepted');
    if (!accepted) {
      setShowPrivacyModal(true); // Show the privacy modal
    } else {
      setPrivacyAccepted(true);
    }
  }, []);

  // Function to handle privacy policy acceptance
  const handleAcceptPrivacyPolicy = () => {
    localStorage.setItem('privacyAccepted', 'true');
    setPrivacyAccepted(true);
    setShowPrivacyModal(false); // Close the modal
  };

  return (
    <div className={`side-header ${showMenu ? 'expanded' : 'collapsed'}`}>
      {/* Header Section */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        ☰
      </div>

      {showMenu && (
        <>
          <div className="vyuh-logo">Vyuha</div>

          <div className="menu-options">
            <div
              className="menu-item"
              onMouseEnter={() => setShowPlayOptions(true)}
              onMouseLeave={() => setShowPlayOptions(false)}
              onClick={handlePlayClick}
            >
              <span className="menu-icon">🕹️</span> Play
              {showPlayOptions && (
                <div className="dropdown-menu">
                  <div>Play</div>
                </div>
              )}
            </div>

            <div className="menu-item" onClick={handleLearnClick}>
              <span className="menu-icon">📘</span> Game Tutorial
            </div>
            <div className="menu-item" onClick={handleSupportClick}>
              <span className="menu-icon">📰</span> Support
            </div>
            <div className="menu-item" onClick={handleAboutClick}>
              <span className="menu-icon">ℹ️</span> About
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="main-content">
        {/* Render image and button only if currentContent is null */}
        {currentContent === null && (
          <>
            <img
              src="D.webp"
              alt="Custom Content"
              style={{
                position: 'absolute',
                top: '110px',
                left: '50px',
                right: '50px',
                width: '370px',
                height: '320px',
              }}
            />

            <button
              style={{
                position: 'absolute',
                top: '470px',
                left: '50px',
                width: '370px',
                height: '50px',
                backgroundColor: '#d9534f',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                fontSize: '18px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={handlePlayClick}
            >
              🏆 Play Now 🏆
            </button>

            {/* Play Online Button */}
            <button
              style={{
                position: 'absolute',
                top: '530px', // Adjust position below the "Play Now" button
                left: '65px',
                width: '340px',
                height: '50px',
                backgroundColor: '#5cb85c',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                fontSize: '18px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={handlePlayOnlineClick}
            >
              🎮 Play Online 🎮
            </button>

            {/* Coming Soon Message */}
            {comingSoon && (
              <div style={{
                position: 'absolute',
                top: '600px', // Adjust position for the message
                left: '70px',
                width: '330px',
                height: '20px',
                backgroundColor: '#f0ad4e',
                color: '#fff',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                Coming Soon
              </div>
            )}
          </>
        )}

        {currentContent === 'play' && <div>P</div>}
        {currentContent === 'learn' && <div>L</div>}
        {currentContent === 'support' && <div>S</div>}
        {currentContent === 'about' && <div>A</div>}
        {currentContent === 'userAgreement' && <div>U</div>}
        {currentContent === 'privacyPolicy' && <div>P</div>}
        {currentContent === 'partners' && <div>P</div>}
      </div>

      {/* Privacy Policy Modal */}
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

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-text">
          <a href="#" onClick={(e) => { e.preventDefault(); handleSupportClick(); }}>Support ☎</a> |  
          <a href="#" onClick={(e) => { e.preventDefault(); handleAboutClick(); }}>About🔎</a> |
          <a href="#" onClick={(e) => { e.preventDefault(); handleUserAgreementClick(); }}>User Agreement🤝</a> |
          <a href="#" onClick={(e) => { e.preventDefault(); handlePrivacyPolicyClick(); }}>Privacy Policy🔐</a> |
          <a href="#" onClick={(e) => { e.preventDefault(); handlePartnersClick(); }}>Join as Investor💰</a>
        </div>

        <div className="footer-icons">
          <a href="https://www" target="_blank" rel="noopener noreferrer">Apple</a>
          <a href="https://www" target="_blank" rel="noopener noreferrer">Android</a>
          <a href="https://www" target="_blank" rel="noopener noreferrer">Twitter</a>
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

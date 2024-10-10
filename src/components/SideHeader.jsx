import React, { useState } from 'react';
import './SideHeader.css';

const SideHeader = ({ onPlayClick }) => {
  const [showMenu, setShowMenu] = useState(true);  // Menu visibility
  const [showPlayOptions, setShowPlayOptions] = useState(false);
  const [showPuzzleOptions, setShowPuzzleOptions] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`side-header ${showMenu ? 'expanded' : 'collapsed'}`}>
      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        ☰
      </div>

      {showMenu && (
        <>
          {/* Vyuh Logo */}
          <div className="vyuh-logo">
            Vyuh
          </div>

          {/* Menu Options */}
          <div className="menu-options">
            <div 
              className="menu-item" 
              onMouseEnter={() => setShowPlayOptions(true)}
              onMouseLeave={() => setShowPlayOptions(false)}
              onClick={onPlayClick}
            >
              <span className="menu-icon">🕹️</span> Play
              {showPlayOptions && (
                <div className="dropdown-menu">
                  <div onClick={onPlayClick}>Play</div>
                  <div>Offline</div>
                  <div>Tournament</div>
                </div>
              )}
            </div>
            
            <div 
              className="menu-item" 
              onMouseEnter={() => setShowPuzzleOptions(true)}
              onMouseLeave={() => setShowPuzzleOptions(false)}
            >
              <span className="menu-icon">🧩</span> Puzzles
              {showPuzzleOptions && (
                <div className="dropdown-menu">
                  <div>Solve Easy</div>
                  <div>Solve Hard</div>
                </div>
              )}
            </div>
            <div className="menu-item"><span className="menu-icon">📘</span> Learn</div>
            <div className="menu-item"><span className="menu-icon">📰</span> Log In</div>
            <div className="menu-item"><span className="menu-icon">👥</span> Sign Up</div>
          </div>
        </>
      )}

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-text">
          <a href="#">Support</a> | 
          <a href="#">About</a> |
          <a href="#">Students</a> |
          <a href="#">Jobs</a> |
          <a href="#">User Agreement</a> |
          <a href="#">Privacy Policy</a> |
          <a href="#">Partners</a> |
        </div>
        
        <div className="footer-icons">
          <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">Apple</a>
          <a href="https://www.android.com" target="_blank" rel="noopener noreferrer">Android</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
        </div>

        <div className="footer-copyright">
          Vyuh.in © 2024 |||
        </div>
      </footer>
    </div>
  );
};

export default SideHeader;

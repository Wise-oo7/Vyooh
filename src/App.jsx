import React, { useState, useEffect } from 'react';
import './App.css';
import SideHeader from './components/SideHeader';
import Board from './components/Board';
import Bond from './components/Bond';
import Learn from './components/Learn';
import Support from './components/Support';
import About from './components/About';
import UserAgreement from './components/UserAgreement';
import PrivacyPolicy from './components/PrivacyPolicy';
import Partners from './components/Partners';

function App() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname.slice(1) || ''); // Start with path or empty if root

  // Function to handle Play button click
  const handlePlayClick = () => {
    setCurrentPage('play');
  };

  // Function to handle "Play with Mahabharat" button click
  const handleMahabharatClick = () => {
    setCurrentPage('board');
  };

  // Function to handle "Play With SuperPower" button click
  const handleSuperPowerClick = () => {
    setCurrentPage('bond');
  };

  // Effect to handle popstate and set currentPage to empty if URL is root
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.slice(1);
      setCurrentPage(path || ''); // If path is empty, set to empty to indicate blank home
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Update the browser history whenever currentPage changes
  useEffect(() => {
    if (currentPage) {
      window.history.pushState(null, '', `/${currentPage}`);
    } else {
      window.history.pushState(null, '', '/'); // Go to root URL for a blank home
    }
  }, [currentPage]);

  return (
    <div className="App">
      <SideHeader 
        onPlayClick={handlePlayClick}
        onLearnClick={() => setCurrentPage('learn')}
        onSupportClick={() => setCurrentPage('support')}
        onAboutClick={() => setCurrentPage('about')}
        onUserAgreementClick={() => setCurrentPage('userAgreement')}
        onPrivacyPolicyClick={() => setCurrentPage('privacyPolicy')}
        onPartnersClick={() => setCurrentPage('partners')}
      />

      {/* Only render content if currentPage is not empty */}
      {currentPage && (
        <>
          {currentPage === 'play' && (
            <div className="play-box">
              <button className="play-button" onClick={handleMahabharatClick}>
                🎲व्यूह🎲
              </button>
              <button className="play-button" onClick={handleSuperPowerClick}>
                🏆ColdWar🏆
              </button>
            </div>
          )}

          {currentPage === 'board' && (
            <div className="board-container">
              <Board />
            </div>
          )}

          {currentPage === 'bond' && (
            <div className="bond-container">
              <Bond />
            </div>
          )}

          {currentPage === 'learn' && <div className="learn-container"><Learn /></div>}
          {currentPage === 'support' && <div className="support-container"><Support /></div>}
          {currentPage === 'about' && <div className="about-container"><About /></div>}
          {currentPage === 'userAgreement' && <div className="useragreement-container"><UserAgreement /></div>}
          {currentPage === 'privacyPolicy' && <div className="privacy-policy-container"><PrivacyPolicy /></div>}
          {currentPage === 'partners' && <div className="partners-container"><Partners /></div>}
        </>
      )}
    </div>
  );
}

export default App;

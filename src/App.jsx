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
  const [currentPage, setCurrentPage] = useState(window.location.pathname.slice(1) || ''); // Default to the URL path or blank

  // Function to update `currentPage` and reset page content
  const navigateToPage = (page) => {
    setCurrentPage(page);
    window.history.pushState(null, '', `/${page}`); // Update browser history
  };

  // Handle "Play" button events with specific pages
  const handlePlayClick = () => navigateToPage('play');
  const handleMahabharatClick = () => navigateToPage('board');
  const handleSuperPowerClick = () => navigateToPage('bond');

  // Effect to handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.slice(1);
      setCurrentPage(path || ''); // Set currentPage to root if URL path is empty
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Render the active component based on `currentPage`
  const renderPageContent = () => {
    switch (currentPage) {
      case 'play':
        return (
          <div className="play-box">
            <button className="play-button" onClick={handleMahabharatClick}>
              🎲व्यूह🎲
            </button>
            <button className="play-button" onClick={handleSuperPowerClick}>
              🏆ColdWar🏆
            </button>
          </div>
        );
      case 'board':
        return <div className="board-container"><Board /></div>;
      case 'bond':
        return <div className="bond-container"><Bond /></div>;
      case 'learn':
        return <div className="learn-container"><Learn /></div>;
      case 'support':
        return <div className="support-container"><Support /></div>;
      case 'about':
        return <div className="about-container"><About /></div>;
      case 'userAgreement':
        return <div className="useragreement-container"><UserAgreement /></div>;
      case 'privacyPolicy':
        return <div className="privacy-policy-container"><PrivacyPolicy /></div>;
      case 'partners':
        return <div className="partners-container"><Partners /></div>;
      default:
        return <div>🎡</div>;
    }
  };

  return (
    <div className="App">
      <SideHeader 
        onPlayClick={handlePlayClick}
        onLearnClick={() => navigateToPage('learn')}
        onSupportClick={() => navigateToPage('support')}
        onAboutClick={() => navigateToPage('about')}
        onUserAgreementClick={() => navigateToPage('userAgreement')}
        onPrivacyPolicyClick={() => navigateToPage('privacyPolicy')}
        onPartnersClick={() => navigateToPage('partners')}
      />

      {/* Render the page content */}
      <div className="page-content">
        {renderPageContent()}
      </div>
    </div>
  );
}

export default App;

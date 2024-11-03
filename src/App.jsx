import React, { useState } from 'react';
import './App.css';
import SideHeader from './components/SideHeader';
import Board from './components/Board';
import Learn from './components/Learn';
import Support from './components/Support'; // Import Support page
import About from './components/About';
import UserAgreement from './components/UserAgreement';
import PrivacyPolicy from './components/PrivacyPolicy'; // Import Privacy Policy component
import Partners from './components/Partners'; // Import Partners component

function App() {
  const [currentPage, setCurrentPage] = useState(''); // State to track current page

  // Function to handle Play button click
  const handlePlayClick = () => {
    setCurrentPage('play'); // Set the current page to play
  };

  // Function to handle Learn button click
  const handleLearnClick = () => {
    setCurrentPage('learn'); // Set the current page to learn
  };

  // Function to handle Support button click
  const handleSupportClick = () => {
    setCurrentPage('support'); // Set the current page to support
  };

  // Function to handle About button click
  const handleAboutClick = () => {
    setCurrentPage('about'); // Set the current page to about
  };

  // Function to handle User Agreement button click
  const handleUserAgreementClick = () => {
    setCurrentPage('userAgreement'); // Set the current page to User Agreement
  };

  // Function to handle Privacy Policy button click
  const handlePrivacyPolicyClick = () => {
    setCurrentPage('privacyPolicy'); // Set the current page to Privacy Policy
  };

  // Function to handle Partners button click
  const handlePartnersClick = () => {
    setCurrentPage('partners'); // Set the current page to Partners
  };

  return (
    <div className="App">
      {/* Conditionally render the SideHeader */}
      <SideHeader 
        onPlayClick={handlePlayClick} 
        onLearnClick={handleLearnClick} 
        onSupportClick={handleSupportClick}  // Pass support click handler
        onAboutClick={handleAboutClick}
        onUserAgreementClick={handleUserAgreementClick}
        onPrivacyPolicyClick={handlePrivacyPolicyClick} // Pass Privacy Policy click handler
        onPartnersClick={handlePartnersClick} // Pass Partners click handler
      />

      {/* Conditionally render the pages based on currentPage value */}
      {currentPage === 'play' && (
        <div className="play-container">
          <Board />
        </div>
      )}

      {currentPage === 'learn' && (
        <div className="learn-container">
          <Learn />  {/* Render Learn component */}
        </div>
      )}

      {currentPage === 'support' && (
        <div className="support-container">
          <Support />  {/* Render Support component */}
        </div>
      )}

      {currentPage === 'about' && (
        <div className="about-container">
          <About />  {/* Render About component */}
        </div>
      )}

      {currentPage === 'userAgreement' && (
        <div className="useragreement-container">
          <UserAgreement />  {/* Render User Agreement component */}
        </div>
      )}

      {currentPage === 'privacyPolicy' && (
        <div className="privacy-policy-container">
          <PrivacyPolicy />  {/* Render Privacy Policy component */}
        </div>
      )}

      {currentPage === 'partners' && (
        <div className="partners-container">
          <Partners />  {/* Render Partners component */}
        </div>
      )}
    </div>
  );
}

export default App;

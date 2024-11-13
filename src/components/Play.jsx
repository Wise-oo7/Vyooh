import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

const Play = () => {
  const navigate = useNavigate();

  const handleMahabharatClick = () => {
    navigate('/board');
  };

  const handleSuperPowerClick = () => {
    navigate('/bond');
  };

  return (
    <div className="play-container">
      <button className="play-button" onClick={handleMahabharatClick}>
        🎲व्यूह🎲
      </button>
      <button className="play-button" onClick={handleSuperPowerClick}>
        🏆ColdWar🏆
      </button>
    </div>
  );
};

export default Play;

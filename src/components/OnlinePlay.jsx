import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnlinePlay = () => {
  const navigate = useNavigate();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row', // Arrange buttons side by side
    alignItems: 'center',
    justifyContent: 'center', // Center buttons horizontally
    height: '100vh',
    marginTop: '-380px', // Move buttons higher up
    gap: '1rem', // Add spacing between buttons
  };

  const buttonStyle = {
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    width: 'auto', // Allow button width to adjust based on content
    minWidth: '120px', // Ensure buttons are visible on small screens
    textAlign: 'center', // Center-align text
    boxSizing: 'border-box', // Ensure padding is included in width
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={() => navigate('/signup')}>
        Sign Up
      </button>
      <button style={buttonStyle} onClick={() => navigate('/findaplayer')}>
        Find a Player
      </button>
    </div>
  );
};

export default OnlinePlay;

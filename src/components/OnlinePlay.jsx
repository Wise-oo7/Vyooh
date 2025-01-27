import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnlinePlay = ({ renderSignup = true, renderFindAPlayer = true }) => {
  const navigate = useNavigate();

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
  <div className='d-flex gap-4'>
    {renderSignup && <button style={buttonStyle} onClick={() => navigate('/signup')}>
      Sign Up
    </button>}
    {renderFindAPlayer && <button style={buttonStyle} onClick={() => navigate('/findaplayer')}>
      Find a Player
    </button>}
  </div>
);
};

export default OnlinePlay;

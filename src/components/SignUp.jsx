import React, { useState } from 'react';
import './SignUp.css';
import OnlinePlay from './OnlinePlay';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, mobileNumber }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Sign-up successful! You can now find a player.');
      } else {
        alert(data.message);
      }
      navigate("/findaplayer");
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <>
      <div className="signup-container d-flex flex-col gap-4">
        <OnlinePlay renderSignup={false} />
        <form className="signup-form" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Mobile Number:
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import './FindAPlayer.css';

const socket = io('http://localhost:5000');

const FindAPlayer = () => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/find-player', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ player1, player2 }),
      });

      const data = await response.json();
      if (data.success) {
        // Notify both players to join the game room via WebSocket
        socket.emit('join-game', { gameId: `${player1}-${player2}`, player: player1 });
        navigate('/board', { state: { player1, player2, gameId: `${player1}-${player2}` } });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error finding player:', error);
    }
  };

  return (
    <div className="find-player-container">
      <form className="find-player-form" onSubmit={(e) => e.preventDefault()}>
        <h1>Find a Player</h1>
        <label>
          Your Mobile Number:
          <input
            type="tel"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
            required
          />
        </label>
        <label>
          Opponent Mobile Number:
          <input
            type="tel"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
            required
          />
        </label>
        <button onClick={handleSearch}>Search</button>
      </form>
    </div>
  );
};

export default FindAPlayer;

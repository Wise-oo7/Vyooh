import React, { useState } from 'react';

const Player1 = () => {
  const [playerName, setPlayerName] = useState('Player 2');
  const [playerPoints, setPlayerPoints] = useState(0);

  const updatePoints = (change) => {
    setPlayerPoints(prevPoints => prevPoints + change);
  };

  return (
    <div className="player-info-box">
      <div className="player-info-item">
        <span>Name:</span>
        <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
      </div>
      <div className="player-info-item">
        <span>Dice:King🤴</span>
      </div>
      <div className="player-info-item">
        <span>Points:</span>
        <button onClick={() => updatePoints(-1)}>-</button>
        <span>{playerPoints}</span>
        <button onClick={() => updatePoints(1)}>+</button>
      </div>
    </div>
  );
};

export default Player1;

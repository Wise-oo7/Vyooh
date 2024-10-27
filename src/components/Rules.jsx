import React, { useState } from 'react';
import './Rules.css'; // Import your CSS file

const Rules = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleRules = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Game Rules Button positioned as required */}
      <button className="note-button" onClick={toggleRules}>
        Game Rules
      </button>

      {/* Display Rules right below the button */}
      {isOpen && (
        <div className="rules-container">
          <h2>Game Rules!</h2>
          <p>1. Each player has 9 Dices.</p>
          <p>2. Only 2 players can play.</p>
          <p>3. We will place Dice on the map one by one.</p>
          <p>4. We need to form a trick! place 3 Dice of the same color in a row.</p>
          <p>5. After placing all 9 Dice, we can move the Dice left-right and up-down.</p>
          <p>6. Once a trick is formed, we take one Dice from the opponent, and then one point is counted.</p>
          <p>7. Dice from an already formed trick cannot be taken.</p>
          <p>8. We can break and form new tricks.</p>
          <p>9. The player who collects the most Dice will be the winner.</p>
        </div>
      )}
    </div>
  );
};

export default Rules;

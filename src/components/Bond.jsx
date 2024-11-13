import React, { useState, useEffect } from "react";
import "../App.css";

  const Bond = () => {
  const totalButtons = 24;
  const [buttons, setButtons] = useState(Array(totalButtons).fill({ symbol: null, color: "white", name: null }));
  const [kingCount, setKingCount] = useState(0);
  const [queenCount, setQueenCount] = useState(0);
  const [isKingTurn, setIsKingTurn] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [goldenLines, setGoldenLines] = useState([]);
  const [pinkLines, setPinkLines] = useState([]);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [removeButtonPosition, setRemoveButtonPosition] = useState({ top: 0, left: 0 });
  const [removeButtonIndex, setRemoveButtonIndex] = useState(null);
  const [kingRemovals, setKingRemovals] = useState(0);
  const [queenRemovals, setQueenRemovals] = useState(0);
  const [kingRemovalCount, setKingRemovalCount] = useState(0);
  const [queenRemovalCount, setQueenRemovalCount] = useState(0);
  const [kingTime, setKingTime] = useState(0);
  const [queenTime, setQueenTime] = useState(0);
  const [winner, setWinner] = useState(null);

  const [removedPandavNames, setRemovedPandavNames] = useState([]);
  const [removedKauravNames, setRemovedKauravNames] = useState([]);


  const pandavNames = ["RUSSIA", "INDIA", "CHINA", "SOUTH KOREA", "JAPAN", "SAUDI ARABIA", "NEPAL", "INDONE SIA", "IRAN"];   
  const kauravNames = ["UNITED STATES", "CANADA", "FRANCE", "UNITED KING DOM", "GER MANY", "ITALY", "TURKEY", "SPAIN", "POLAND"];


  const movementRules = {
    0: [1, 3], 1: [0, 2, 9], 2: [1, 4], 3: [0, 11, 5], 4: [2, 7, 12],
    5: [3, 6], 6: [5, 14, 7], 7: [6, 4], 8: [9, 11], 9: [1, 8, 10, 17],
    10: [9, 12], 11: [3, 8, 19, 13], 12: [4, 10, 15, 20], 13: [11, 14],
    14: [6, 13, 22, 15], 15: [14, 12], 16: [17, 19], 17: [9, 18, 16],
    18: [17, 20], 19: [11, 16, 21], 20: [12, 23, 18], 21: [22, 19],
    22: [14, 21, 23], 23: [22, 20]
  };

  const linesToCheck = [
    [0, 1, 2], [0, 3, 5], [5, 6, 7], [7, 4, 2], [8, 9, 10], [8, 11, 13],
    [13, 14, 15], [15, 12, 10], [16, 17, 18], [16, 19, 21], [21, 22, 23],
    [23, 20, 18], [1, 9, 17], [8, 9, 10], [3, 11, 19], [22, 14, 6], [20, 12, 4]
  ];

  
  useEffect(() => {
    let interval;
    if (kingCount + queenCount > 0) {
      interval = setInterval(() => {
        if (isKingTurn) {
          setKingTime((time) => time + 1);
        } else {
          setQueenTime((time) => time + 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isKingTurn, kingCount, queenCount]);

  const handleClick = (index) => {
    const audio = new Audio('/gt.mp3');
    setButtons((prevButtons) => {
      const newButtons = [...prevButtons];
      const current = newButtons[index];
      
      if (selectedIndex === index) {
        setSelectedIndex(null);
      } else if (current.symbol !== null && selectedIndex === null) {
        if (movementRules[index].some((move) => newButtons[move].symbol === null)) {
          setSelectedIndex(index);
          setIsKingTurn(current.symbol === "P");
        }
      } else if (selectedIndex !== null && current.symbol === null) {
        if (movementRules[selectedIndex].includes(index)) {
          newButtons[index] = newButtons[selectedIndex];
          newButtons[selectedIndex] = { symbol: null, color: "white", name: null };
          setSelectedIndex(null);
          setIsKingTurn(newButtons[index].symbol === "P");
        }
      } else if (kingCount < 9 - kingRemovals && isKingTurn) {
        const availablePandavNames = pandavNames.filter(name => !removedPandavNames.includes(name));
        newButtons[index] = { symbol: "P", color: "sandybrown", name: availablePandavNames[kingCount] };
        setKingCount(kingCount + 1);
        setIsKingTurn(false);
        audio.play(); // Play sound for King
      } else if (queenCount < 9 - queenRemovals && !isKingTurn) {
        const availableKauravNames = kauravNames.filter(name => !removedKauravNames.includes(name));
        newButtons[index] = { symbol: "K", color: "skyblue", name: availableKauravNames[queenCount] };
        setQueenCount(queenCount + 1);
        setIsKingTurn(true);
        audio.play(); // Play sound for Queen
      }
      setShowRemoveButton(false);
      return newButtons;
    });
  };
  


const handleContextMenu = (event, index) => {
  event.preventDefault();
  
  // Prevent removing dice if the color is Yellow or seagreen
  const currentColor = getButtonColor(index);
  if (currentColor === "Yellow" || currentColor === "seagreen") return;

  if (buttons[index].symbol === null) return;

  const buttonRect = event.target.getBoundingClientRect();
  setRemoveButtonPosition({
    top: buttonRect.top + window.scrollY + buttonRect.height / 2,
    left: buttonRect.left + window.scrollX + buttonRect.width / 2,
  });
  setShowRemoveButton(true);
  setRemoveButtonIndex(index);
};


const handleRemove = () => {
  setButtons((prevButtons) => {
    const newButtons = [...prevButtons];
    const removedPiece = newButtons[removeButtonIndex];

    // Add the removed name to the removed list
    if (removedPiece.symbol === "P") {
      setRemovedPandavNames((prev) => [...prev, removedPiece.name]);
      setKingCount(kingCount - 1);
      setKingRemovals(kingRemovals + 1);
      setQueenRemovalCount(queenRemovalCount + 1);
    } else if (removedPiece.symbol === "K") {
      setRemovedKauravNames((prev) => [...prev, removedPiece.name]);
      setQueenCount(queenCount - 1);
      setQueenRemovals(queenRemovals + 1);
      setKingRemovalCount(kingRemovalCount + 1);
    }

    // Clear the button
    newButtons[removeButtonIndex] = { symbol: null, color: "white", name: null };
    setShowRemoveButton(false);
    return newButtons;
  });
};


  const getButtonColor = (index) => {
    const isGolden = goldenLines.some((line) => line.includes(index));
    const isBurlywood = pinkLines.some((line) => line.includes(index));
    if (isGolden) return "Yellow";
    if (isBurlywood) return "seagreen";
    return buttons[index].color;
  };

  useEffect(() => {
    checkForLines();
  }, [buttons]);

  const checkForLines = () => {
    const newGoldenLines = [];
    const newPinkLines = [];

    linesToCheck.forEach((line) => {
      const [a, b, c] = line;
      if (buttons[a].symbol === "P" && buttons[b].symbol === "P" && buttons[c].symbol === "P") {
        newGoldenLines.push(line);
      } else if (buttons[a].symbol === "K" && buttons[b].symbol === "K" && buttons[c].symbol === "K") {
        newPinkLines.push(line);
      }
    });

    setGoldenLines(newGoldenLines);
    setPinkLines(newPinkLines);
  };

  // Check for winner
  useEffect(() => {
    if (kingRemovalCount >= 8) {
      setWinner("RedArmy🛡️");
    } else if (queenRemovalCount >= 8) {
      setWinner("WhiteArmy️🌟"); 
    }
  }, [kingRemovalCount, queenRemovalCount]);

  // Play audio when the winner is declared
  useEffect(() => {
    if (winner) {
      const audio = new Audio('/claps.mp3');
      audio.play();
    }
  }, [winner]);

  return (
    <div className="rectangle-container Bond-background">
      {buttons.map((btn, index) => (
        <button
         key={index}
         className={`rectangle-button ${selectedIndex === index ? "selected" : ""}`}
         onClick={() => handleClick(index)}
         onContextMenu={(event) => handleContextMenu(event, index)}
         style={{ backgroundColor: getButtonColor(index) }}
        >
  <div className="piece-symbol">{btn.symbol}</div>
  {btn.name && <div className="piece-name">{btn.name}</div>}
</button>
      ))}
      {showRemoveButton && (
        <button
          className="remove-button"
          onClick={handleRemove}
          style={{ position: "fixed", top: removeButtonPosition.top, left: removeButtonPosition.left }}
        >
          Remove
        </button>
      )}

      <div className="counter-buttons">
        <button className="king-count-button">RedArmy🛡️Points | {kingRemovalCount} | {Math.floor(kingTime / 60)}:{String(kingTime % 60).padStart(2, '0')}</button>
        <button className="queen-count-button">WhiteArmy️🌟 Points | {queenRemovalCount} | {Math.floor(queenTime / 60)}:{String(queenTime % 60).padStart(2, '0')}</button>
      </div>

      {winner && (
        <div className="winner-box">
          🎉🎈🎉🎈🎉🎉🎈🎉🎉🎈🎉🎉🎈🎉🎉🎈🎉🎉🎈 Congratulations! <strong>{winner}</strong> Won!🏆 🎉🎈🎉🎈🎉🎉🎈🎉🎉🎈🎉🎉🎈🎉🎉🎈🎈🎉
        </div>
      )}

      <div className="c">
        <div className="rectangle"></div>
      </div>

      <svg className="rectangle-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
        <rect x="5" y="5" width="90" height="90" fill="none" stroke="white" strokeWidth="0.2"/>
        <rect x="20" y="20" width="60" height="60" fill="none" stroke="white" strokeWidth="0.2"/>
        <rect x="35" y="35" width="30" height="30" fill="none" stroke="white" strokeWidth="0.2"/>
        <line x1="50%" y1="5%" x2="50%" y2="20%" stroke="red" strokeWidth="0.2" />
        <line x1="50%" y1="20%" x2="50%" y2="35%" stroke="red" strokeWidth="0.2" />
        <line x1="5%" y1="50%" x2="20%" y2="50%" stroke="red" strokeWidth="0.2" />
        <line x1="20%" y1="50%" x2="35%" y2="50%" stroke="red" strokeWidth="0.2" />
        <line x1="95%" y1="50%" x2="80%" y2="50%" stroke="red" strokeWidth="0.2" />
        <line x1="80%" y1="50%" x2="65%" y2="50%" stroke="red" strokeWidth="0.2" />
        <line x1="50%" y1="95%" x2="50%" y2="80%" stroke="red" strokeWidth="0.2" />
        <line x1="50%" y1="80%" x2="50%" y2="65%" stroke="red" strokeWidth="0.2" />
      </svg>
    </div>
  );
};

export default Bond;


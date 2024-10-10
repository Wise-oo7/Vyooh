import React, { useState } from "react";
import "../App.css";

const ChessBoard = () => {
  const [buttons, setButtons] = useState(Array(24).fill({ symbol: null, color: "white" })); // 24 buttons

  const handleClick = (index) => {
    setButtons((prevButtons) =>
      prevButtons.map((btn, i) => {
        if (i === index) {
          if (btn.symbol === null) return { symbol: "♔", color: "Purple " }; // King with Purple  color
          else if (btn.symbol === "♔") return { symbol: "♕", color: "Red" }; // Queen with yellow color
          else if (btn.symbol === "♕") return { symbol: "white", color: "white" }; // Reset to white
          else return { symbol: "♔", color: "Purple " }; // Loop back to King
        }
        return btn;
      })
    );
  };

  return (
    <div className="rectangle-container chessboard-background">
      {buttons.map((btn, index) => (
        <button
          key={index}
          className={`rectangle-button ${btn.symbol === "white" ? "white-button" : ""}`}
          onClick={() => handleClick(index)}
          style={{ backgroundColor: btn.color }} // Apply background color dynamically
        >
          {btn.symbol !== "white" ? btn.symbol : null}
        </button>
      ))}
      <div className="c">
        <div className="rectangle"></div>
      </div>

      <svg className="rectangle-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
        <div className="c">
          <div className="rectangle"></div>
        </div>

        {/* Rectangle and Line SVG elements */}
        <rect x="5" y="5" width="90" height="90" fill="none" stroke="black" strokeWidth="0.2" />
        <rect x="20" y="20" width="60" height="60" fill="none" stroke="black" strokeWidth="0.2" />
        <rect x="35" y="35" width="30" height="30" fill="none" stroke="black" strokeWidth="0.2" />
        <line x1="50%" y1="5%" x2="50%" y2="20%" stroke="black" strokeWidth="0.2" />
        <line x1="50%" y1="20%" x2="50%" y2="35%" stroke="black" strokeWidth="0.2" />
        <line x1="5%" y1="50%" x2="20%" y2="50%" stroke="black" strokeWidth="0.2" />
        <line x1="20%" y1="50%" x2="35%" y2="50%" stroke="black" strokeWidth="0.2" />
        <line x1="95%" y1="50%" x2="80%" y2="50%" stroke="black" strokeWidth="0.2" />
        <line x1="80%" y1="50%" x2="65%" y2="50%" stroke="black" strokeWidth="0.2" />
        <line x1="50%" y1="95%" x2="50%" y2="80%" stroke="black" strokeWidth="0.2" />
        <line x1="50%" y1="80%" x2="50%" y2="65%" stroke="black" strokeWidth="0.2" />
      </svg>
    </div>
  );
};

export default ChessBoard;

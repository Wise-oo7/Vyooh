import { useEffect, useState } from "react";
import axios from 'axios';
import io from "socket.io-client";

const socket = io("http://localhost:7892"); // Your backend server URL

const ChessBoard = () => {
  const [boardState, setBoardState] = useState(Array(24).fill({ symbol: null, color: "white" }));
  const [players, setPlayers] = useState([]); // For storing player information

  // Fetch player information using Axios
  const fetchPlayerInfo = async () => {
    try {
      const response = await axios.get('http://localhost:7892/saheba/getall'); // API call to get player info
      setPlayers(response.data); // Assuming the response contains an array of player objects
    } catch (error) {
      console.error("Error fetching player data:", error);
    }
  };

  useEffect(() => {
    // Fetch player info on component mount
    fetchPlayerInfo();

    // WebSocket for receiving game moves
    socket.on("move", (newBoardState) => {
      setBoardState(newBoardState);
    });

    // Cleanup WebSocket on component unmount
    return () => {
      socket.off("move");
    };
  }, []);

  const handleMove = (index) => {
    const updatedBoard = boardState.map((btn, i) => {
      if (i === index) {
        if (btn.symbol === null) return { symbol: "♔", color: "black" };
        if (btn.symbol === "♔") return { symbol: "♕", color: "skyblue" };
        return { symbol: "white", color: "white" };
      }
      return btn;
    });

    setBoardState(updatedBoard);

    // Emit the move to the server via WebSocket
    socket.emit("move", updatedBoard);
  };

  return (
    <div>
      <div className="rectangle-container">
        {boardState.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleMove(index)}
            style={{ backgroundColor: btn.color }}
          >
            {btn.symbol}
          </button>
        ))}
      </div>

      {/* Display player information */}
      <div className="player-info">
        <h3>Players:</h3>
        <ul>
          {players.map((player, idx) => (
            <li key={idx}>
              {player.name} - {player.rank}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChessBoard;

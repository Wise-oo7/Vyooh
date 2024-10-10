import React, { useState } from 'react';
import './App.css';
import Player1 from './components/Player1';
import Player2 from './components/Player2';
import Rules from './components/Rules';
import Timer from './components/Timer';
import SideHeader from './components/SideHeader';
import ChessBoard from './components/ChessBoard';
import HeroSection from './components/HeroSection';
import MainContent from './components/MainContent';

function App() {
  const [showPlayComponents, setShowPlayComponents] = useState(false);

  // Function to handle Play button click
  const handlePlayClick = () => {
    setShowPlayComponents(true);
  };

  return (
    <div className="App">
      <SideHeader onPlayClick={handlePlayClick} />
      {showPlayComponents && (
        <div className="play-container">
          <Player1 />
          <Player2 />
          <Rules />
          <Timer />
          <ChessBoard/>
        </div>
      )}
    </div>
  );
}

export default App;

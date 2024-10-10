import React, { useState, useEffect } from 'react';
import '../App.css'; // Assuming you're using a global stylesheet

const Timer = () => {
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    const startTime = new Date().getTime();

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - startTime;

      const hours = String(Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((elapsedTime % (1000 * 60)) / 1000)).padStart(2, '0');

      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-box">
      <span className="time-display">{time}</span>
    </div>
  );
};

export default Timer;

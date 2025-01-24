const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mysql = require('mysql2');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'online_play',
  port: 3306,
});

db.connect((err) => {
  if (err) console.error('Database connection failed:', err);
  else console.log('Connected to database');
});

let activeGames = {}; // In-memory game state for simplicity

io.on('connection', (socket) => {
  console.log('New player connected:', socket.id);

  socket.on('joinGame', ({ mobileNumber }) => {
    db.query(
      'SELECT * FROM players WHERE mobile_number = ?',
      [mobileNumber],
      (err, results) => {
        if (err) return console.error(err);
        if (results.length === 0) {
          socket.emit('error', 'Player not registered');
        } else {
          const player = results[0];
          socket.join(`game_${player.game_id}`);
          if (!activeGames[player.game_id]) {
            activeGames[player.game_id] = { state: null, currentTurn: null };
          }
          socket.emit('gameState', activeGames[player.game_id]);
        }
      }
    );
  });

  socket.on('move', ({ gameId, index, player }) => {
    const game = activeGames[gameId];
    if (game && game.currentTurn === player) {
      // Update game state logic
      game.state.buttons[index] = player === 'P' ? { symbol: 'P' } : { symbol: 'K' };
      game.currentTurn = player === 'P' ? 'K' : 'P';

      // Broadcast updated state to both players
      io.to(`game_${gameId}`).emit('gameState', game);
    }
  });

  socket.on('disconnect', () => {
    console.log('Player disconnected:', socket.id);
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Server } = require('socket.io');
const db = require('./db');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(bodyParser.json());
app.use(cors());

const activeGames = {};

// Sign Up API
app.post('/api/signup', (req, res) => {
  const { name, mobileNumber } = req.body;
  const checkQuery = 'SELECT * FROM players WHERE mobileNumber = ?';
  const insertQuery = 'INSERT INTO players (name, mobileNumber) VALUES (?, ?)';

  db.query(checkQuery, [mobileNumber], (err, result) => {
    if (err) return res.status(500).json({ message: 'Error checking mobile number.' });

    if (result.length > 0) {
      return res.status(400).json({ message: 'Mobile number already exists.' });
    }

    db.query(insertQuery, [name, mobileNumber], (err) => {
      if (err) return res.status(500).json({ message: 'Error inserting player.' });

      res.json({ message: 'Sign up successful!' });
    });
  });
});

// Find a Player API
app.post('/api/find-player', (req, res) => {
  const { player1, player2 } = req.body;
  const query = 'SELECT * FROM players WHERE mobileNumber = ?';

  db.query(query, [player1], (err, result1) => {
    if (err || result1.length === 0) {
      return res.status(400).json({ message: 'Player 1 not found.' });
    }

    db.query(query, [player2], (err, result2) => {
      if (err || result2.length === 0) {
        return res.status(400).json({ message: 'Player 2 not found.' });
      }

      res.json({ success: true });
    });
  });
});

// WebSocket connection
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('join-game', ({ gameId, player }) => {
    if (!activeGames[gameId]) {
      activeGames[gameId] = { currentTurn: player };
    }

    socket.join(gameId);
    console.log(`Player ${player} joined game ${gameId}`);

    io.to(gameId).emit('player-joined', { gameId, player });
  });

  socket.on('roll-dice', ({ gameId, player, diceValue }) => {
    const game = activeGames[gameId];

    if (game.currentTurn === player) {
      game.currentTurn = game.currentTurn === player ? player : null;

      io.to(gameId).emit('dice-rolled', { player, diceValue });
    } else {
      socket.emit('error', { message: 'Not your turn!' });
    }
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

server.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

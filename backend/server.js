const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

// Initialize the app and middleware
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/vyuh", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check connection
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// Create a game schema
const gameSchema = new mongoose.Schema({
  board: Array,
  players: Array,
  turn: String,
});

const Game = mongoose.model("Game", gameSchema);

// HTTP Server and Socket.io setup
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Replace with your React app's URL
    methods: ["GET", "POST"],
  },
});

// Socket.io for real-time communication
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Event: Join game
  socket.on("joinGame", async ({ gameId, player }) => {
    const game = await Game.findById(gameId);
    if (game.players.length < 2) {
      game.players.push(player);cd
      await game.save();
      socket.join(gameId);
      io.to(gameId).emit("updateGame", game);
    }
  });

  // Event: Make a move
  socket.on("makeMove", async ({ gameId, board, turn }) => {
    const game = await Game.findById(gameId);
    game.board = board;
    game.turn = turn;
    await game.save();
    io.to(gameId).emit("updateGame", game);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

// Create Game API
app.post("/create-game", async (req, res) => {
  const game = new Game({
    board: Array(24).fill({ symbol: null, color: "white", name: null }),
    players: [],
    turn: "king",
  });
  await game.save();
  res.json({ gameId: game._id });
});

// Start the server
server.listen(4000, () => {
  console.log("Server is running on port 4000");
});

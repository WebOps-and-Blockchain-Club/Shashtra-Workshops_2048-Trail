const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  moves: [{ type: "string" }],
  score: { type: Number },
});

let Game = mongoose.model("Game", gameSchema);

module.exports = Game;

const express = require("express");
const router = express.Router();

const gameController = require("../Controller/game_controller");

// adds a game
router.post("/addgame", gameController.add_game);

module.exports = router;

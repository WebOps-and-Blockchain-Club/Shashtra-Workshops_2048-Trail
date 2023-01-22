const express = require("express");
const router = express.Router();

const diaryController = require("../Controller/diary_controller");

const authMiddleware = require("../Middleware/auth_middleware");

// adds an entry
router.post("/addentry", authMiddleware.verify_jwt, diaryController.add_entry);
// gets all diary entries of a user
router.post(
  "/getentry",
  authMiddleware.verify_jwt,
  diaryController.get_entries
);

module.exports = router;

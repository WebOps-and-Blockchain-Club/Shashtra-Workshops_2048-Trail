const mongoose = require("mongoose");

const diarySchema = new mongoose.Schema({
  date: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

let Diary = mongoose.model("Diary", diarySchema);

module.exports = Diary;

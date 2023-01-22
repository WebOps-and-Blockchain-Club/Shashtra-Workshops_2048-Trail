const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Fill a valid Email Address",
    ],
  },
  password: {
    type: String,
    required: true,
  },
  diary: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Diary",
    },
  ],
});

let User = mongoose.model("User", userSchema);

module.exports = User;

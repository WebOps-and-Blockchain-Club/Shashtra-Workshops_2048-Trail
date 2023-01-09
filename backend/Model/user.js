const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
      "Invalid Phone number!",
    ],
  },
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

const mongoose = require("mongoose");

const USER_MODEL = new mongoose.Schema({
  nickname: { type: String, required: true, minlength: 4 },
  email: {
    type: String,
    required: true,
    validate: /^\w+([.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail).(?:|com|es)+$/,
    unique: true,
  },
  password: { type: String, required: true, minlength: 6 },
});

module.exports = mongoose.model("user", USER_MODEL);

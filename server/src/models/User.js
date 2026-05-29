const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  college: {
    type: String,
    default: "",
  },

  branch: {
    type: String,
    default: "",
  },

  year: {
    type: String,
    default: "",
  },

  targetCompany: {
    type: String,
    default: "",
  },

  leetcodeSolved: {
    type: Number,
    default: 0,
  },

  currentGoal: {
    type: String,
    default: "",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

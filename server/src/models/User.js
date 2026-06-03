// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   fullName: {
//     type: String,
//     required: true,
//   },

//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },

//   password: {
//     type: String,
//     required: true,
//   },

//   college: {
//     type: String,
//     default: "",
//   },

//   branch: {
//     type: String,
//     default: "",
//   },

//   year: {
//     type: String,
//     default: "",
//   },

//   targetCompany: {
//     type: String,
//     default: "",
//   },

//   leetcodeSolved: {
//     type: Number,
//     default: 0,
//   },

//   currentGoal: {
//     type: String,
//     default: "",
//   },

//   isProfileComplete: {
//     type: Boolean,
//     default: false,
//   },
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;



const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
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

    isProfileComplete: {
      type: Boolean,
      default: false,
    },

    settings: {
      emailNotifications: {
        type: Boolean,
        default: true,
      },
      darkMode: {
        type: Boolean,
        default: false,
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
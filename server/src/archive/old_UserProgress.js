// const mongoose = require("mongoose");

// const userProgressSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },

//     course: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Course",
//       required: true,
//     },

//     completedLessons: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//       },
//     ],

//     progressPercentage: {
//       type: Number,
//       default: 0,
//     },

//     status: {
//       type: String,
//       enum: ["not-started", "in-progress", "completed"],
//       default: "not-started",
//     },
//   },
//   { timestamps: true },
// );

// const UserProgress = mongoose.model("UserProgress", userProgressSchema);

// module.exports = UserProgress;

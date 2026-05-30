const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["not-started", "in-progress", "completed"],
      default: "not-started",
    },

    progressPercentage: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

progressSchema.pre("save", function (next) {
  if (this.progressPercentage === 0) {
    this.status = "not-started";
  } else if (this.progressPercentage === 100) {
    this.status = "completed";
  } else {
    this.status = "in-progress";
  }
  next();
});

const Progress = mongoose.model("Progress", progressSchema);

module.exports = Progress;

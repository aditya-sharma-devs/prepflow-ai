const mongoose = require("mongoose");

const roadmapLessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    default: "",
  },

  order: {
    type: Number,
    required: true,
  },
});

const roadmapSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    topic: {
      type: String,
      required: true,
    },

    lessons: [roadmapLessonSchema],

    source: {
      type: String,
      default: "fake-ai",
    },

    topicKey: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

roadmapSchema.index(
  { user: 1, topicKey: 1 },
  { unique: true }
);

const Roadmap = mongoose.model("Roadmap", roadmapSchema);

module.exports = Roadmap;

const Roadmap = require("../models/Roadmap");
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateRoadmap(req, res) {
  try {
    const { topic } = req.body;

    if (!topic || !topic.trim()) {
      return res.status(400).json({
        message: "Topic is required",
      });
    }

    const cleanTopic = topic.trim().toLowerCase();

    const existingRoadmap = await Roadmap.findOne({
      user: req.user.id,
      topicKey: cleanTopic,
    });

    if (existingRoadmap) {
      return res.status(200).json(existingRoadmap);
    }

    const prompt = `
Create a beginner-friendly learning roadmap for "${topic}".

Return ONLY valid JSON.
No markdown.
No extra explanation.

Format:
[
  {
    "title": "Lesson title",
    "description": "Short beginner-friendly explanation",
    "order": 1
  }
]

Rules:
- Create exactly 7 lessons.
- Keep titles short.
- Keep descriptions simple.
- Make order from 1 to 7.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    let text = response.text;

    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const lessons = JSON.parse(text);

    const roadmap = await Roadmap.create({
      user: req.user.id,
      topic: topic.trim(),
      topicKey: cleanTopic,
      lessons,
      source: "gemini",
    });

    res.status(201).json(roadmap);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to generate roadmap",
      error: error.message,
    });
  }
}

async function getMyRoadmaps(req, res) {
  try {
    const roadmaps = await Roadmap.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json(roadmaps);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

async function getSingleRoadmap(req, res) {
  try {
    const roadmap = await Roadmap.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!roadmap) {
      return res.status(404).json({
        message: "Roadmap not found",
      });
    }

    res.status(200).json(roadmap);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

async function deleteRoadmap(req, res) {
  try {
    const roadmap = await Roadmap.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!roadmap) {
      return res.status(404).json({
        message: "Roadmap not found",
      });
    }

    res.status(200).json({
      message: "Roadmap deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = {
  generateRoadmap,
  getMyRoadmaps,
  getSingleRoadmap,
  deleteRoadmap,
};

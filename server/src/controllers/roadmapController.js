const Roadmap = require("../models/Roadmap");

async function generateRoadmap(req, res) {
  try {
    const { topic } = req.body;

    const fakeLessons = [
      {
        title: `${topic} Basics`,
        description: `Introduction to ${topic}`,
        order: 1,
      },
      {
        title: `${topic} Intermediate`,
        description: `Core concepts of ${topic}`,
        order: 2,
      },
      {
        title: `${topic} Advanced`,
        description: `Advanced concepts of ${topic}`,
        order: 3,
      },
    ];

    const roadmap = await Roadmap.create({
      user: req.user.id,
      topic,
      lessons: fakeLessons,
    });

    res.status(201).json(roadmap);
  } catch (error) {
    res.status(500).json({
      message: error.message,
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
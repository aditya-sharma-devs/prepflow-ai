const Course = require("../models/Course");
const UserProgress = require("../models/UserProgress");

async function enrollCourse(req, res) {
  try {
    const { courseId } = req.body;

    const existingProgress = await UserProgress.findOne({
      user: req.user.id,
      course: courseId,
    });

    if (existingProgress) {
      return res.status(400).json({
        message: "Already enrolled in this course",
      });
    }

    const progress = await UserProgress.create({
      user: req.user.id,
      course: courseId,
    });

    res.status(201).json(progress);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = { enrollCourse };

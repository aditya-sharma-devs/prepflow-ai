const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  generateRoadmap,
  getMyRoadmaps,
  getSingleRoadmap,
  deleteRoadmap,
} = require("../controllers/roadmapController");


const router = express.Router();

router.post("/generate", authMiddleware, generateRoadmap);
router.get("/", authMiddleware, getMyRoadmaps);
router.get("/:id", authMiddleware, getSingleRoadmap);
router.delete("/:id", authMiddleware, deleteRoadmap);

module.exports = router;
const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { enrollCourse } = require("../controllers/progressController");

const router = express.Router();

router.post("/enroll", authMiddleware, enrollCourse);

module.exports = router;
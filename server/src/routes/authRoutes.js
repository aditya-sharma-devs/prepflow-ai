const express = require("express");
const { signupUser, loginUser, getProfile, updateProfile } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);

router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile)

module.exports = router;

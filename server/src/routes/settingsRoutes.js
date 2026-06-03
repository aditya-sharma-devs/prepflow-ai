const express = require("express");
const {
  getSettings,
  updateProfile,
  changePassword,
  updatePreferences,
  deleteAccount,
} = require("../controllers/settingsController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getSettings);
router.put("/profile", authMiddleware, updateProfile);
router.put("/password", authMiddleware, changePassword);
router.put("/preferences", authMiddleware, updatePreferences);
router.delete("/account", authMiddleware, deleteAccount);

module.exports = router;
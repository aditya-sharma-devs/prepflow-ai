const bcrypt = require("bcryptjs");
const User = require("../models/User");

async function getSettings(req, res) {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch settings",
      error: error.message,
    });
  }
}

async function updateProfile(req, res) {
  try {
    const { fullName, email } = req.body;

    const existingUser = await User.findOne({
      email,
      _id: { $ne: req.user.id },
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already in use",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { fullName, email },
      { new: true }
    ).select("-password");

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Profile update failed",
      error: error.message,
    });
  }
}

async function changePassword(req, res) {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user.id);

    if (!user || !user.password) {
      return res.status(400).json({
        message: "User password not found. Please create a new test user after fixing signup.",
      });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Current password is incorrect",
      });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.status(200).json({
      message: "Password changed successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Password change failed",
      error: error.message,
    });
  }
}

async function updatePreferences(req, res) {
  try {
    const { emailNotifications, darkMode } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        settings: {
          emailNotifications,
          darkMode,
        },
      },
      { new: true }
    ).select("-password");

    res.status(200).json({
      message: "Preferences updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Preferences update failed",
      error: error.message,
    });
  }
}

async function deleteAccount(req, res) {
  try {
    await User.findByIdAndDelete(req.user.id);

    res.status(200).json({
      message: "Account deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Account deletion failed",
      error: error.message,
    });
  }
}

module.exports = {
  getSettings,
  updateProfile,
  changePassword,
  updatePreferences,
  deleteAccount,
};
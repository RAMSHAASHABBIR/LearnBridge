import express from "express";
import User from "../models/User.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get Profile
router.get("/profile", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Update Profile
router.put("/updateProfile", protect, async (req, res) => {
  const {
    phoneNumber,
    institutionName,
    city,
    degreeType,
    degreeName,
    startDate,
    endDate,
    association,
    speciality,
  } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.role !== "Teacher") {
      return res.status(403).json({ message: "Only teachers can update their profile." });
    }

    user.phoneNumber = phoneNumber || user.phoneNumber;
    user.institutionName = institutionName || user.institutionName;
    user.city = city || user.city;
    user.degreeType = degreeType || user.degreeType;
    user.degreeName = degreeName || user.degreeName;
    user.startDate = startDate || user.startDate;
    user.endDate = endDate || user.endDate;
    user.association = association || user.association;
    user.speciality = speciality || user.speciality;

    await user.save();
    res.status(200).json({ message: "Profile updated successfully.", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

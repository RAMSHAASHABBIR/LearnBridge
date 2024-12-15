import express from "express";
import User from "../models/User.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/profile", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const profileData = {
      phoneNumber: user.phoneNumber || "",
      institutionName: user.institutionName || "",
      city: user.city || "",
      degreeType: user.degreeType || "",
      degreeName: user.degreeName || "",
      startDate: user.startDate || "",
      endDate: user.endDate || "",
      association: user.association || "",
      speciality: user.speciality || "",
    };
    res.json(profileData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/createProfile", protect, async (req, res) => {
  try {
    const updatedProfile = await User.findByIdAndUpdate(
      req.user.id,
      { ...req.body },
      { new: true }
    );
    res.json({ message: "Profile created successfully!", profile: updatedProfile, redirectTo: "/", });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create profile" });
  }
});

router.put("/updateProfile", protect, async (req, res) => {
  try {
    const updatedProfile = await User.findByIdAndUpdate(
      req.user.id,
      { ...req.body },
      { new: true }
    );
    res.json({ message: "Profile updated successfully!", profile: updatedProfile, redirectTo: "/", });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update profile" });
  }
});

export default router;

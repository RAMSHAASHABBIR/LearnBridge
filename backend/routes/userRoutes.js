import express from "express";
import User from "../models/User.js"; // Assuming User is the user model
import { protect } from "../middleware/auth.js"; // Adjust path as needed
const router = express.Router();

// Create Profile Endpoint
router.post("/createProfile", protect, async (req, res) => {
  const { phoneNumber, institutionName, city, degreeType, degreeName, startDate, endDate, association, speciality } = req.body;

  if (!phoneNumber || !institutionName || !city || !degreeType || !degreeName) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.role !== "Teacher") {
      return res.status(403).json({ message: "Only teachers can create a profile" });
    }

    // Update user data with profile information
    user.phoneNumber = phoneNumber || "";
    user.institutionName = institutionName || "";
    user.city = city || "";
    user.degreeType = degreeType || "";
    user.degreeName = degreeName || "";
    user.startDate = startDate || "";
    user.endDate = endDate || "";
    user.association = association || "";
    user.speciality = speciality || "";

    await user.save();

    return res.status(201).json({ message: "Profile created successfully", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error, please try again later" });
  }
});


export default router; // Default export


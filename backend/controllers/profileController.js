import User from "../models/User.js";

// Update Profile
export const updateProfile = async (req, res) => {
  const userId = req.user.id; // Extracted from the token
  const { phoneNumber, institutionName, city, degreeType, degreeName, startDate, endDate, association, speciality } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.role !== "Teacher") {
      return res.status(403).json({ message: "Only teachers can update this information." });
    }

    // Update teacher-specific fields
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
    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get Profile
export const getProfile = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

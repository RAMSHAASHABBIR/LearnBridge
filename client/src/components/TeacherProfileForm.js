import React, { useState, useEffect } from "react";
import axios from "axios";

const TeacherProfileForm = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    institutionName: "",
    city: "",
    degreeType: "",
    degreeName: "",
    startDate: "",
    endDate: "",
    association: "",
    speciality: "",
  });

  const fetchProfile = async () => {
    try {
      const res = await axios.get("/api/users/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setFormData(res.data);
    } catch (err) {
      console.error("Error fetching profile data:", err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("/api/users/updateProfile", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Error updating profile:", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber || ''} onChange={handleChange} />
      <input name="institutionName" placeholder="Institution Name" value={formData.institutionName || ''} onChange={handleChange} />
      <input name="city" placeholder="City" value={formData.city || ''} onChange={handleChange} />
      <input name="degreeType" placeholder="Degree Type" value={formData.degreeType || ''} onChange={handleChange} />
      <input name="degreeName" placeholder="Degree Name" value={formData.degreeName || ''} onChange={handleChange} />
      <input name="startDate" type="month" value={formData.startDate?.slice(0, 7) || ''} onChange={handleChange} />
      <input name="endDate" type="month" value={formData.endDate?.slice(0, 7) || ''} onChange={handleChange} />
      <select name="association" value={formData.association || ''} onChange={handleChange}>
        <option value="">Select Association</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
      </select>
      <input name="speciality" placeholder="Speciality (Optional)" value={formData.speciality || ''} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};

export default TeacherProfileForm;

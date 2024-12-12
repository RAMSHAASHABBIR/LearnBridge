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

  useEffect(() => {
    // Fetch existing profile data
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/api/profile", {
          headers: { Authorization: localStorage.getItem("token") },
        });
        setFormData(res.data);
      } catch (err) {
        console.error("Error fetching profile data:", err);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("/api/profile/update", formData, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      alert("Profile updated successfully");
    } catch (err) {
      if (err.response?.status === 403) {
        alert("Permission denied: Only teachers can update their profile.");
      } else {
        console.error("Error updating profile:", err);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
      <input name="institutionName" placeholder="Institution Name" value={formData.institutionName} onChange={handleChange} />
      <input name="city" placeholder="City" value={formData.city} onChange={handleChange} />
      <input name="degreeType" placeholder="Degree Type" value={formData.degreeType} onChange={handleChange} />
      <input name="degreeName" placeholder="Degree Name" value={formData.degreeName} onChange={handleChange} />
      <input name="startDate" type="month" value={formData.startDate} onChange={handleChange} />
      <input name="endDate" type="month" value={formData.endDate} onChange={handleChange} />
      <select name="association" value={formData.association} onChange={handleChange}>
        <option value="">Select Association</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
      </select>
      <input name="speciality" placeholder="Speciality (Optional)" value={formData.speciality} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};

export default TeacherProfileForm;

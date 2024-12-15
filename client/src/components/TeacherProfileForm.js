import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom

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

  const [isProfileExisting, setIsProfileExisting] = useState(false);

  const navigate = useNavigate(); // Initialize navigate

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You must be logged in!");
        return;
      }

      const res = await axios.get("http://localhost:5000/api/users/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.data) {
        setFormData(res.data);
        setIsProfileExisting(true);
      }
    } catch (err) {
      console.error("Error fetching profile data:", err.response?.data || err.message);
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
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in!");
      return;
    }

    try {
      const endpoint = isProfileExisting
        ? "http://localhost:5000/api/users/updateProfile"
        : "http://localhost:5000/api/users/createProfile";

      const method = isProfileExisting ? "put" : "post";

      const res = await axios[method](endpoint, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert(res.data.message);

      // Redirect to home page after submission
      navigate("/"); // Redirect to home page

    } catch (err) {
      console.error("Error submitting profile data:", err.response?.data || err.message);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Teacher Profile</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber || ""}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="institutionName"
            placeholder="Institution Name"
            value={formData.institutionName || ""}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="city"
            placeholder="City"
            value={formData.city || ""}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="degreeType"
            placeholder="Degree Type"
            value={formData.degreeType || ""}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="degreeName"
            placeholder="Degree Name"
            value={formData.degreeName || ""}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="startDate"
            type="month"
            value={formData.startDate?.slice(0, 7) || ""}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="endDate"
            type="month"
            value={formData.endDate?.slice(0, 7) || ""}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="association"
            value={formData.association || ""}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Association</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
          </select>
          <input
            name="speciality"
            placeholder="Speciality (Optional)"
            value={formData.speciality || ""}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
             {isProfileExisting ? "Update Profile" : "Create Profile"}
            
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherProfileForm;

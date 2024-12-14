import React, { useState } from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data being sent:", formData);
  
    if (!formData.email || !formData.password) {
      alert("Please enter both email and password.");
      return;
    }
    
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      console.log("Response Data: ", res.data);
  
      if (res.status === 200) {
        alert("Login successful");
        const { token } = res.data;

        // Store the token in localStorage for later use (e.g., in API requests)
        localStorage.setItem("token", token);
  
        // Store session data
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("role", res.data.role);
  
        // Redirect based on user role
        if (res.data.role === "Teacher") {
          navigate("/teacher-profile");
        } else if (res.data.role === "Student") {
          navigate("/");
        } else {
          alert("Unrecognized user role.");
        }
      } else {
        alert("Login failed: Invalid response");
      }
    } catch (err) {
      alert("Login failed: " + (err.response ? err.response.status : err.message));
      if (err.response) {
        console.error("Login error response:", err.response);
      } else {
        console.error("Login error:", err.message);
      }
    }
  };
  

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
// import React, { useState } from "react";
// import axios from "axios";
// import Layout from "../../components/Layout";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate(); // Initialize useNavigate for redirection

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.email || !formData.password) {
//       alert("Please enter both email and password.");
//       return;
//     }
//     console.log("Form data being sent:", formData);
//     try {
//       // Make the API call to login
//       const res = await axios.post("http://localhost:5000/api/auth/login", formData);

//       // Log the response to check the token and user info
//       console.log("Response Data: ", res.data);

//       if (res.status === 200 && res.data.token) {
//         alert("Login successful");
//         localStorage.setItem("token", res.data.token); // Store token in local storage

//         // Check user role and redirect accordingly
//         if (res.data.role === "Teacher") {
//           navigate("/teacher-profile"); // Redirect teachers to TeacherProfileForm.js
//         } else if (res.data.role === "Student") {
//           navigate("/dashboard"); // Redirect students to dashboard
//         } else {
//           alert("Unrecognized user role.");
//           console.error("Unrecognized user role:", res.data.role);
//         }
//       } else {
//         alert("Login failed: Invalid response");
//         console.error("Invalid response:", res);
//       }
//     } catch (err) {
//       alert("Login failed: " + (err.response ? err.response.status : err.message));
//       if (err.response) {
//         console.error("Login error response:", err.response);
//         console.error("Error message:", err.response.data);
//       } else {
//         console.error("Login error:", err.message);
//       }
//     }
//   };

//   return (
//     <Layout>
//       <div className="flex justify-center items-center min-h-screen bg-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//           <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//           <form className="login-form" onSubmit={handleSubmit}>
//             <input
//               id="email"
//               placeholder="Email"
//               onChange={handleChange}
//               required
//               value={formData.email}
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               onChange={handleChange}
//               required
//               value={formData.password}
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
//             />
//             <button
//               type="submit"
//               className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </Layout>
//   );
// };
// export default Login;

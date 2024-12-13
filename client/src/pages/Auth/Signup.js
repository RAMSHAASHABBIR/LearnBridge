import React, { useState } from "react";
import axios from "axios";
import Layout from "../../components/Layout";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "", // New state for role
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setError(""); // Clear error message on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert(res.data.message); // Notify success
      setFormData({ firstName: "", lastName: "", email: "", password: "", role: "" });
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              id="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            />
            <input
              id="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            />
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
            {/* Dropdown for role */}
            <select
              id="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            >
              <option value="">Who Am I?</option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>

            {error && <p className="text-red-500 text-center">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
// import React, { useState } from "react";
// import axios from "axios";
// import Layout from "../../components/Layout";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     role: "", // New state for role
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//     setError(""); // Clear error message on input change
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
//       alert(res.data.message); // Notify success
//       setFormData({ firstName: "", lastName: "", email: "", password: "", role: "" });
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       setError(err.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <Layout>
//       <div className="flex justify-center items-center min-h-screen bg-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//           <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
//           <form className="signup-form" onSubmit={handleSubmit}>
//             <input
//               id="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
//             />
//             <input
//               id="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
//             />
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
//             />
//             {/* Dropdown for role */}
//             <select
//               id="role"
//               value={formData.role}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
//             >
//               <option value="">Who Am I?</option>
//               <option value="Student">Student</option>
//               <option value="Teacher">Teacher</option>
//             </select>

//             {error && <p className="text-red-500 text-center">{error}</p>}
//             <button
//               type="submit"
//               className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
//             >
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Signup;

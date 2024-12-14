import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import TeacherCard from './pages/all-tutors';
import Store from './pages/store';
import TeacherProfileForm from './pages/TeacherProfilePage'; // Import the form component
import './index.css'; // Import Tailwind CSS

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/all-tutors" element={<TeacherCard />} />
        <Route path="/store" element={<Store />} />
        <Route path="/teacher-profile" element={<TeacherProfileForm />} /> {/* Add this */}
      </Routes>
    </>
  );
}

export default App;

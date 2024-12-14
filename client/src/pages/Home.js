import React from "react";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import brick from '../assets/bricks.jpg'
import raf from '../assets/rafiki.png'
import Typed from 'typed.js';
import TutSearch from "../components/tutsearch";
import { Link } from "react-router-dom"; // Import Link to navigate to the profile page

function Home() {
  const el = React.useRef(null);

  // Get logged-in user data from localStorage (or any other auth mechanism you are using)
  const user = JSON.parse(localStorage.getItem("user")); // Assuming the user is saved in localStorage as a JSON string
  
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Connecting Knowledge Seekers with Passionate Educators.',  'Find the Right Teacher for Your Learning Journey', 'Transforming Education with a Click.'],
      typeSpeed: 60,
    });

    return () => {
      typed.destroy(); // Clean up on component unmount
    };
  }, []);

  return (
    <Layout>
      <div className="containerr flex flex-nowrap">
        <div className="pg-r" data-aos="">
          <div className="midd">
            <h1 ref={el}>Welcome to Teachify – A New Way to Connect with Educators!</h1>
            <p>
              Teachify is an innovative platform designed to bridge the gap
              between students seeking knowledge and teachers eager to share
              their expertise. Whether you're a student in search of a
              personalized learning experience or an educator looking to empower
              learners, Teachify makes it easy to connect and collaborate.
            </p>
          </div>
        </div>
      </div>

      {/* Conditionally render Profile button based on user role */}
      {user && user.role === "Teacher" && (
        <div>
          <Link to="/teacher/profile">
            <button>View and Edit Profile</button>
          </Link>
        </div>
      )}
      

  
      <TutSearch />


      <div className="container-two">
        <div className="info-num">
          <div className="data">
            <h2>
              100+ <br />
              Subjects
            </h2>
          </div>
          <div className="data">
            <h2>
              50+ <br />
              Skills
            </h2>
          </div>
          <div className="data">
            <h2>
              10+ <br />
              Languages
            </h2>
          </div>
        </div>
        <div className="wwd">
          <div className="wwd-data">
            <h2 id="sp">What we do?</h2>
            <p>
              TeacherOn.com is a free website, trusted by thousands of students
              and teachers,
              <br />
              <br /> all over the world. You can find local tutors, online
              teachers, and teachers to help with tutoring, coaching,
              assignments, academic projects, and dissertations for over 9500
              subjects.
            </p>
          </div>
        </div>
      </div>
      <div className="container-three">
        <div id="upr"></div>
        <div className="overlay-image"></div>
      </div>
    </Layout>
  );
}

export default Home;

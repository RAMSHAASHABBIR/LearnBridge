import React, { useState } from "react";

const Storesearch = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  return (
    <>
      <div className="p-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-lg font-semibold text-center mb-4">Find the best stores for educational materials</h2>

          {/* Categories */}
          <div className="flex items-center justify-center gap-4 my-4">
            {["All", "Books", "Supplies", "Electronics", "Other"].map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`${
                  activeCategory === category
                    ? "text-blue-600 underline"
                    : "text-gray-700"
                } hover:text-blue-500 font-medium px-3 py-1`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Filters for Subjects and Levels */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-4">
            {/* Dropdown for Subject */}
            <select
              value={selectedSubject}
              onChange={handleSubjectChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 w-full md:w-auto"
            >
              <option value="">Subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
              <option value="History">History</option>
              <option value="Art">Art</option>
            </select>

            {/* Dropdown for Level */}
            <select
              value={selectedLevel}
              onChange={handleLevelChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 w-full md:w-auto"
            >
              <option value="">Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* Search Form */}
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
            <input
              type="text"
              id="location"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[150px] p-2.5"
              placeholder="Location"
              required
            />
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Storesearch;

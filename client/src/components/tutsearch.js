import React, { useState } from "react";

const Tutsearch = () => {
  const [activeFilter, setActiveFilter] = useState("Online"); // Default filter is "Online"
  const [selectedLevel, setSelectedLevel] = useState("");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  return (
    <>
      <div className="search">
        <div className="rc">
          <h2>Find online teachers for free</h2>
          {/* Filters */}
          <div className="flex items-center gap-4 my-4">
            {/* Only "Online" filter option */}
            <button
              onClick={() => handleFilterClick("Online")}
              className={`${
                activeFilter === "Online"
                  ? "text-blue-600 underline"
                  : "text-gray-700"
              } hover:text-blue-500 font-medium`}
            >
              Online
            </button>

            {/* Dropdown for Level */}
            <select
              value={selectedLevel}
              onChange={handleLevelChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
            >
              <option value="">Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* Search Form */}
          <div className="form flex gap-4">
            {/* Removed the Location input */}
            <input
              type="text"
              id="subject"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] p-2.5"
              placeholder="Subject"
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

export default Tutsearch;

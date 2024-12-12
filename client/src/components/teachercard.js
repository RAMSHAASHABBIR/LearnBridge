import React from "react";

export default function TeacherCard({
  name = "Ali Siddiqui",
  categories = ["Computer", "Programming"],
  description = "Experienced educator passionate about making complex subjects easy to understand.",
  imageUrl = "/placeholder.svg?height=80&width=80",
  location = "Bahawalpur",
  charges = "$2/hour",
  experience = "3 years",
  isOnline = true,
  isOffline = false,
}) {
  return (
    <div className=" flex justify-start text-black lg:mx-20 p-10 sm:w-full ">
      <div className="max-w-2xl rounded overflow-hidden shadow-2xl   sm:w-full ">
        <div className="px-6 py-4">
          <div className="flex items-center mb-4">
            <img
              className="w-20 h-20 rounded-full object-cover mr-4"
              src={imageUrl}
              alt={name}
            />
            <div>
              <h2 className="font-bold text-xl">{name}</h2>
              <p className="text-gray-600 text-sm">{location}</p>
            </div>
          </div>
          <p className="text-gray-700 text-base mb-4">{description}</p>
          <div className="grid grid-cols-2 gap-2 text-sm mb-4">
            <div>
              <span className="font-semibold">Charges:</span> {charges}
            </div>
            <div>
              <span className="font-semibold">Experience:</span> {experience}
            </div>
            <div>
              <span className="font-semibold">Online:</span>{" "}
              {isOnline ? "Yes" : "No"}
            </div>
            <div>
              <span className="font-semibold">Offline:</span>{" "}
              {isOffline ? "Yes" : "No"}
            </div>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          {categories.map((category, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

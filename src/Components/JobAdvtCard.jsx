import React from "react";
import { FaMapMarkerAlt, FaBriefcase, FaDollarSign, FaClock, FaBookmark, FaRegBookmark } from "react-icons/fa";

export const JobAdvtCard = ({ data }) => {
  const { jobTitle, type, companyName, location, salary, postedDate, logo, isHot } = data;

  // Map job types to colors
  const typeColors = {
    "Fulltime": "bg-green-100 text-green-800",
    "Partime": "bg-blue-100 text-blue-800",
    "Remote": "bg-purple-100 text-purple-800",
    "Freelance": "bg-yellow-100 text-yellow-800",
    "Contract": "bg-orange-100 text-orange-800",
  };

  const typeColor = typeColors[type] || "bg-gray-100 text-gray-800";

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-5">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Company Logo */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
              {logo ? (
                <img src={logo} alt={companyName} className="w-full h-full object-cover" />
              ) : (
                <div className="text-gray-400 text-2xl">{companyName.charAt(0)}</div>
              )}
            </div>
          </div>

          {/* Job Details */}
          <div className="flex-grow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                {jobTitle}
              </h3>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${typeColor}`}>
                  {type}
                </span>
                {isHot && (
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full">
                    Hot
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 text-sm gap-y-2 sm:gap-x-4">
              <div className="flex items-center">
                <FaBriefcase className="mr-1.5 text-gray-400" />
                {companyName}
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-1.5 text-gray-400" />
                {location}
              </div>
              {salary && (
                <div className="flex items-center">
                  <FaDollarSign className="mr-1.5 text-gray-400" />
                  {salary}
                </div>
              )}
              {postedDate && (
                <div className="flex items-center">
                  <FaClock className="mr-1.5 text-gray-400" />
                  {postedDate}
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center gap-2 mt-3 sm:mt-0">
            <button className="text-gray-400 hover:text-blue-600 transition-colors">
              <FaRegBookmark size={18} />
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


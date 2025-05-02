import React from "react";
import { FaMapMarkerAlt, FaRegClock, FaDollarSign, FaBriefcase, FaBookmark, FaRegBookmark } from "react-icons/fa";

export const LatestJobCard = ({ data }) => {
  const { 
    jobName, 
    description, 
    payScale, 
    type, 
    companyName, 
    logo, 
    location, 
    postedDate,
    featured
  } = data;

  // Truncate description to keep cards consistent
  const truncatedDescription = description.length > 120 
    ? `${description.substring(0, 120)}...` 
    : description;

  // Map job types to colors
  const typeColors = {
    "Full Time": "bg-green-100 text-green-800 border-green-200",
    "Part Time": "bg-blue-100 text-blue-800 border-blue-200",
    "Work From Home": "bg-purple-100 text-purple-800 border-purple-200",
    "Freelance": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Contract": "bg-orange-100 text-orange-800 border-orange-200",
  };

  const typeColor = typeColors[type] || "bg-gray-100 text-gray-800 border-gray-200";

  // Generate random logo background color if not provided
  const logoColors = [
    "bg-blue-500", "bg-green-500", "bg-purple-500", 
    "bg-red-500", "bg-yellow-500", "bg-pink-500",
    "bg-indigo-500", "bg-teal-500", "bg-orange-500"
  ];
  
  const randomLogoColor = logoColors[companyName.charCodeAt(0) % logoColors.length];

  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col group transform hover:-translate-y-1 ${featured ? 'ring-2 ring-blue-500' : 'border border-gray-100'}`}>
      {featured && (
        <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 absolute right-0 top-4 shadow-md rounded-l-full">
          Featured
        </div>
      )}
      
      <div className="p-6 flex-grow">
        <div className="flex items-start gap-4">
          {/* Company Logo */}
          <div className={`flex-shrink-0 w-12 h-12 ${randomLogoColor} text-white rounded-lg flex items-center justify-center font-bold text-xl`}>
            {logo}
          </div>
          
          {/* Job Title and Company */}
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
              {jobName}
            </h3>
            <p className="text-gray-600 text-sm mb-2">{companyName}</p>
            
            {/* Job Details */}
            <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-500 mb-3">
              {location && (
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-1.5 text-gray-400" />
                  {location}
                </div>
              )}
              {postedDate && (
                <div className="flex items-center">
                  <FaRegClock className="mr-1.5 text-gray-400" />
                  {postedDate}
                </div>
              )}
              {payScale && (
                <div className="flex items-center">
                  <FaDollarSign className="mr-1.5 text-gray-400" />
                  {payScale}
                </div>
              )}
              <div className="flex items-center">
                <FaBriefcase className="mr-1.5 text-gray-400" />
                {type}
              </div>
            </div>
          </div>
          
          {/* Bookmark Button */}
          <button className="text-gray-400 hover:text-blue-600 transition-colors">
            <FaRegBookmark size={20} />
          </button>
        </div>
        
        {/* Job Description */}
        <p className="text-gray-600 mt-4 text-sm">
          {truncatedDescription}
        </p>
      </div>
      
      {/* Action Buttons */}
      <div className="px-6 pb-6 pt-2 mt-auto border-t border-gray-100">
        <div className="flex flex-wrap gap-3 justify-between items-center">
          <span className={`text-xs font-medium px-3 py-1 rounded-full border ${typeColor}`}>
            {type}
          </span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm hover:shadow-md">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};


import React from "react";
import { FaChartLine } from "react-icons/fa";

export const JobTypeCard = ({ data }) => {
  const { title, icon, description, count, color } = data;

  // Color mapping for different job types
  const colorMap = {
    blue: "from-blue-500 to-blue-600 shadow-blue-200",
    green: "from-green-500 to-green-600 shadow-green-200",
    purple: "from-purple-500 to-purple-600 shadow-purple-200",
    orange: "from-orange-500 to-orange-600 shadow-orange-200",
    red: "from-red-500 to-red-600 shadow-red-200",
    teal: "from-teal-500 to-teal-600 shadow-teal-200",
    pink: "from-pink-500 to-pink-600 shadow-pink-200",
    indigo: "from-indigo-500 to-indigo-600 shadow-indigo-200"
  };

  const gradientClass = colorMap[color] || "from-gray-500 to-gray-600 shadow-gray-200";

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col transform group-hover:-translate-y-2">
      <div className={`bg-gradient-to-r ${gradientClass} p-6 text-white`}>
        <div className="flex items-center justify-between">
          <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
            {icon}
          </div>
          {count && (
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
              {count}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold mt-4">{title}</h3>
      </div>
      {description && (
        <div className="p-6 flex-grow">
          <p className="text-gray-600">{description}</p>
        </div>
      )}
      <div className="px-6 pb-6">
        <button className="w-full py-2 border-2 border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 group-hover:border-blue-500 group-hover:text-blue-600">
          Browse Jobs
          <FaChartLine className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};


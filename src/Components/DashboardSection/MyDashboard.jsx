import React from "react";
import { SideBarDashboard } from "./SideBarDashboard";
import { FaBriefcase, FaFileAlt, FaUser, FaChartLine, FaBell } from "react-icons/fa";

export const MyDashboard = () => {
  // Sample data for dashboard stats
  const stats = [
    { icon: <FaBriefcase />, title: "Jobs Applied", count: 12, color: "blue" },
    { icon: <FaFileAlt />, title: "Active Applications", count: 5, color: "green" },
    { icon: <FaBell />, title: "New Notifications", count: 3, color: "orange" },
    { icon: <FaChartLine />, title: "Profile Views", count: 27, color: "purple" }
  ];

  // Sample recent activity data
  const recentActivity = [
    { type: "application", job: "Frontend Developer", company: "Tech Solutions", date: "2 days ago" },
    { type: "view", job: "UX Designer", company: "Creative Studios", date: "3 days ago" },
    { type: "message", from: "HR Manager", company: "Global Systems", date: "1 week ago" }
  ];

  return (
    <div className="flex flex-col md:flex-row relative gap-6 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <SideBarDashboard />
      <div className="w-full md:w-4/5 p-4 md:p-6 pb-20">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Welcome to Your Dashboard</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all duration-300">
              <div className={`bg-${stat.color}-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                <span className={`text-${stat.color}-600 text-xl`}>{stat.icon}</span>
              </div>
              <h3 className="text-gray-500 text-sm">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-800">{stat.count}</p>
            </div>
          ))}
        </div>
        
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-md p-6 flex-1">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-blue-100 p-2 rounded-md mr-2">
                <FaChartLine className="text-blue-600" />
              </span>
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="border-b border-gray-100 pb-3 last:border-0">
                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-full p-2 mr-3">
                      {activity.type === "application" && <FaFileAlt className="text-blue-500" />}
                      {activity.type === "view" && <FaUser className="text-green-500" />}
                      {activity.type === "message" && <FaBell className="text-orange-500" />}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        {activity.type === "application" && `Applied for ${activity.job}`}
                        {activity.type === "view" && `Profile viewed by ${activity.company}`}
                        {activity.type === "message" && `Message from ${activity.from}`}
                      </p>
                      <p className="text-sm text-gray-500">
                        {activity.company} • {activity.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors">
              View All Activity
            </button>
          </div>
          
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-md p-6 lg:w-1/3">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-3 px-4 rounded-lg transition-colors flex items-center">
                <FaBriefcase className="h-6 w-6 mr-2" />
                Apply for a Job
              </button>
              <button className="w-full bg-green-50 hover:bg-green-100 text-green-700 font-medium py-3 px-4 rounded-lg transition-colors flex items-center">
                <FaFileAlt className="h-6 w-6 mr-2" />
                View Applications
              </button>
              <button className="w-full bg-yellow-50 hover:bg-yellow-100 text-yellow-700 font-medium py-3 px-4 rounded-lg transition-colors flex items-center">
                <FaBell className="h-6 w-6 mr-2" />
                Check Notifications
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



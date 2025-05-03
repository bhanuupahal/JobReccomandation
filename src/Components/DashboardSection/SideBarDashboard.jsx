import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  MdDashboard, 
  MdPerson, 
  MdWork, 
  MdSettings, 
  MdLogout,
  MdNotifications,
  MdMessage
} from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

export const SideBarDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close sidebar on mobile when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.sidebar-container') && !event.target.closest('.sidebar-toggle')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Menu items
  const menuItems = [
    { path: "/dashboard", icon: <MdDashboard />, label: "Dashboard" },
    { path: "/profile", icon: <MdPerson />, label: "My Profile" },
    { path: "/jobs", icon: <MdWork />, label: "My Jobs" },
    { path: "/notifications", icon: <MdNotifications />, label: "Notifications" },
    { path: "/messages", icon: <MdMessage />, label: "Messages" },
    { path: "/settings", icon: <MdSettings />, label: "Settings" },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button 
        onClick={toggleSidebar} 
        className="sidebar-toggle md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      {/* Sidebar */}
      <div className={`sidebar-container fixed md:sticky top-0 left-0 h-screen bg-white shadow-xl transition-all duration-300 z-40
        ${isOpen ? "w-64" : "w-0 md:w-64"} md:block overflow-hidden`}>
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-2 flex items-center">
              <MdDashboard className="mr-2" /> My Dashboard
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`flex items-center py-3 px-4 rounded-lg transition-all duration-200 
                      ${location.pathname === item.path 
                        ? "bg-blue-50 text-blue-600 font-medium" 
                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"}`}
                  >
                    <span className="text-xl mr-3">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Logout */}
          <div className="pt-6 border-t border-gray-100">
            <button className="flex items-center py-3 px-4 rounded-lg text-red-500 hover:bg-red-50 transition-all duration-200 w-full">
              <MdLogout className="text-xl mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


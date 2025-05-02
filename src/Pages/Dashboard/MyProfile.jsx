import React, { useState } from "react";
import { SideBarDashboard } from "./SideBarDashboard";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCity, FaGlobe, FaInfoCircle, FaSave } from "react-icons/fa";

const MyProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    aboutMe: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Show success message or redirect
  };

  return (
    <div className="flex flex-col md:flex-row relative gap-6 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <SideBarDashboard />
      <div className="w-full md:w-4/5 p-4 md:p-6 pb-20 flex justify-center">
        <div 
          className="bg-white rounded-xl shadow-lg p-5 md:p-8 mb-6 transition-all duration-300 hover:shadow-xl animate-fadeIn max-w-3xl w-full"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-4 border-b-2 border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-2 rounded-lg mr-3">
                <FaUser className="h-6 w-6" />
              </span>
              Edit Profile
            </h2>
            <div className="mt-4 md:mt-0 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm flex items-center">
              <FaInfoCircle className="mr-2" />
              Complete your profile
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information Section */}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                <span className="bg-blue-100 p-1.5 rounded-md mr-2">
                  <FaUser className="text-blue-600" />
                </span>
                Personal Information
              </h3>
              
              <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
                <div className="space-y-2 group">
                  <label htmlFor="firstName" className="font-medium text-gray-700 block group-hover:text-blue-600 transition-colors">
                    First Name
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="w-full h-10 rounded-lg pl-10 pr-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300" 
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500">
                      <FaUser />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label htmlFor="lastName" className="font-medium text-gray-700 block group-hover:text-blue-600 transition-colors">
                    Last Name
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="w-full h-10 rounded-lg pl-10 pr-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300" 
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500">
                      <FaUser />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label htmlFor="email" className="font-medium text-gray-700 block group-hover:text-blue-600 transition-colors">
                    Email Address
                  </label>
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full h-10 rounded-lg pl-10 pr-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300" 
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500">
                      <FaEnvelope />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 group">
                  <label htmlFor="phone" className="font-medium text-gray-700 block group-hover:text-blue-600 transition-colors">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input 
                      type="tel" 
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full h-10 rounded-lg pl-10 pr-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300" 
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500">
                      <FaPhone />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Address Section */}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                <span className="bg-blue-100 p-1.5 rounded-md mr-2">
                  <FaMapMarkerAlt className="text-blue-600" />
                </span>
                Address Information
              </h3>
              
              <div className="space-y-4">
                <div className="space-y-2 group">
                  <label htmlFor="address" className="font-medium text-gray-700 block group-hover:text-blue-600 transition-colors">
                    Address
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Your full address"
                      className="w-full h-10 rounded-lg pl-10 pr-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300" 
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500">
                      <FaMapMarkerAlt />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2 group">
                    <label htmlFor="city" className="font-medium text-gray-700 block group-hover:text-blue-600 transition-colors">
                      City
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Your city"
                        className="w-full h-10 rounded-lg pl-10 pr-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300" 
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500">
                        <FaCity />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 group">
                    <label htmlFor="postalCode" className="font-medium text-gray-700 block group-hover:text-blue-600 transition-colors">
                      Postal Code
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        id="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        placeholder="Postal code"
                        className="w-full h-10 rounded-lg pl-10 pr-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300" 
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500">
                        <FaInfoCircle />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 group">
                    <label htmlFor="country" className="font-medium text-gray-700 block group-hover:text-blue-600 transition-colors">
                      Country
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        id="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Your country"
                        className="w-full h-10 rounded-lg pl-10 pr-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300" 
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500">
                        <FaGlobe />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* About Me Section */}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                <span className="bg-blue-100 p-1.5 rounded-md mr-2">
                  <FaInfoCircle className="text-blue-600" />
                </span>
                About Me
              </h3>
              
              <div className="space-y-2 group">
                <label htmlFor="aboutMe" className="font-medium text-gray-700 block group-hover:text-blue-600 transition-colors">
                  Professional Summary
                </label>
                <textarea
                  id="aboutMe"
                  value={formData.aboutMe}
                  onChange={handleChange}
                  placeholder="Tell us about your skills, experience, and career goals..."
                  className="w-full rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300"
                  rows="4"
                />
                <p className="text-sm text-gray-500 mt-1">
                  This summary will be visible to employers.
                </p>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:scale-[1.01] active:scale-[0.99]"
              >
                <FaSave className="text-lg" />
                Save Profile Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
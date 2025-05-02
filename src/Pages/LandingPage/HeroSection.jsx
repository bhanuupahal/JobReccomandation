import React from "react";
import { CompoHeading } from "../../Components/CompoHeading";
import { FaMagnifyingGlass } from "react-icons/fa6";
export const HeroSection = () => {
  const compoHeading = {
    // heading: "Unlock Your Career Potential Today",
    // description: "Discover thousands of opportunities tailored just for you. Your dream job is just a click away.",
    // headingClass: "text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-pink-100 text-transparent bg-clip-text",
    // descriptionClass: "mt-4 text-xl bg-gradient-to-r from-blue-100 to-white text-transparent bg-clip-text"
  };
  return (
    <div className="min-h-screen herosection">
      <div className="w-full h-screen bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 opacity-40 absolute"></div>
      <div className="flex flex-col justify-around gap-20 items-center py-20 relative z-10 text-white">
        <CompoHeading data={compoHeading} />

        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-3 text-black max-w-5xl mx-auto backdrop-blur-md bg-white/20 p-6 rounded-2xl shadow-2xl border border-white/30 animate-fadeIn">
            <div className="relative group w-full md:w-auto transform transition-all duration-300 hover:scale-105 hover:z-10">
                <input 
                    type="text" 
                    placeholder="Search Jobs" 
                    className="h-14 w-full md:w-64 p-3 rounded-xl border-2 border-blue-300/50 shadow-inner focus:ring-4 focus:ring-blue-400/50 focus:outline-none transition-all duration-300 pl-10 bg-white/95"
                />
                <span className="absolute left-3 top-4 text-blue-500 group-hover:text-blue-700 transition-colors">
                    <FaMagnifyingGlass className="animate-bounce" />
                </span>
            </div>
            <div className="relative group w-full md:w-auto transform transition-all duration-300 hover:scale-105 hover:z-10">
                <input 
                    type="text" 
                    placeholder="Select Location" 
                    className="h-14 w-full md:w-64 p-3 rounded-xl border-2 border-blue-300/50 shadow-inner focus:ring-4 focus:ring-blue-400/50 focus:outline-none transition-all duration-300 pr-10 bg-white/95"
                />
                <span className="absolute right-3 top-4 text-blue-500 group-hover:text-blue-700 transition-colors">
                    <span className="animate-pulse">📍</span>
                </span>
            </div>
            <div className="relative group w-full md:w-auto transform transition-all duration-300 hover:scale-105 hover:z-10">
                <input 
                    type="text" 
                    placeholder="Select Category" 
                    className="h-14 w-full md:w-64 p-3 rounded-xl border-2 border-blue-300/50 shadow-inner focus:ring-4 focus:ring-blue-400/50 focus:outline-none transition-all duration-300 pr-10 bg-white/95"
                />
                <span className="absolute right-3 top-4 text-blue-500 group-hover:text-blue-700 transition-colors">
                    <span className="inline-block transition-transform group-hover:rotate-180 duration-300">▼</span>
                </span>
            </div>
            <button className="font-semibold flex justify-center items-center gap-2 h-14 w-full md:w-64 bg-gradient-to-r from-[#e34317] to-[#ff5e3a] rounded-xl text-white p-3 hover:from-[#ff5e3a] hover:to-[#e34317] transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border-2 border-[#ff5e3a]/50 hover:border-[#e34317]/50">
                <FaMagnifyingGlass className="animate-ping absolute opacity-75 h-4 w-4" /> 
                <FaMagnifyingGlass className="relative" />
                <span className="font-bold">Find Your Dream Job</span>
            </button>
        </div>

        <div className="mt-8 text-center">
            <h3 className="text-6xl font-bold mb-3">Your Dream Career Awaits</h3>
            <p className="text-2xl max-w-2xl mx-auto">Join thousands of professionals who found their perfect match. Take the first step toward your future today!</p>
            <div className="flex justify-center gap-4 mt-6">
                <span className="bg-white bg-opacity-20 px-6 py-4 rounded-full text-sm backdrop-blur-sm hover:bg-blue-400 hover:bg-opacity-40 hover:scale-105 transition-all duration-300 cursor-pointer border border-white/30 shadow-lg shadow-blue-500/20">10,000+ Jobs</span>
                <span className="bg-white bg-opacity-20 px-6 py-4 rounded-full text-sm backdrop-blur-sm hover:bg-red-400 hover:bg-opacity-40 hover:scale-105 transition-all duration-300 cursor-pointer border border-white/30 shadow-lg shadow-red-500/20">500+ Companies</span>
                <span className="bg-white bg-opacity-20 px-6 py-4 rounded-full text-sm backdrop-blur-sm hover:bg-green-400 hover:bg-opacity-40 hover:scale-105 transition-all duration-300 cursor-pointer border border-white/30 shadow-lg shadow-green-500/20">24/7 Support</span>
            </div>
        </div>
      </div>
    </div>
  );
};























import React from "react";
import { Link } from "react-router-dom";
import { FaGooglePlus, FaTwitter, FaFacebook, FaLinkedinIn, FaYoutube, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  const footerCategories = [
    {
      title: "JOB CATEGORIES",
      links: [
        { name: "Development", url: "#" },
        { name: "Design", url: "#" },
        { name: "Marketing", url: "#" },
        { name: "Finance", url: "#" },
        { name: "Healthcare", url: "#" }
      ]
    },
    {
      title: "JOB TYPES",
      links: [
        { name: "Remote", url: "#" },
        { name: "Full-time", url: "#" },
        { name: "Part-time", url: "#" },
        { name: "Internship", url: "#" },
        { name: "Contract", url: "#" }
      ]
    },
    {
      title: "RESOURCES",
      links: [
        { name: "Career Advice", url: "#" },
        { name: "Resume Builder", url: "#" },
        { name: "Interview Tips", url: "#" },
        { name: "FAQ", url: "#" },
        { name: "Help Center", url: "#" }
      ]
    }
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "123 Job Street, Career City, 10001" },
    { icon: <FaPhone />, text: "+1 (555) 123-4567" },
    { icon: <FaEnvelope />, text: "support@rejoin.com" }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold text-white">
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">re</span>
                <span className="text-white font-extrabold">join</span>
              </div>
            </div>
            <p className="text-gray-300 mt-4">
              Connecting talented professionals with their dream careers. Find your next opportunity with rejoin.
            </p>
            <div className="space-y-2 mt-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                  <span className="text-blue-400">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          {footerCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-bold tracking-wider text-white relative pb-2 inline-block">
                {category.title}
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-500 rounded-full"></span>
              </h3>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.url} 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-2">›</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-wider text-white relative pb-2 inline-block">
              NEWSLETTER
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-500 rounded-full"></span>
            </h3>
            <p className="text-gray-300">
              Subscribe to our newsletter for the latest job opportunities and career tips.
            </p>
            <div className="mt-4">
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                />
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} rejoin. All rights reserved.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 justify-center">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-blue-400 transition-all duration-300 transform hover:scale-110">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300 transform hover:scale-110">
                <FaGooglePlus />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-110">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-red-500 transition-all duration-300 transform hover:scale-110">
                <FaYoutube />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-pink-600 transition-all duration-300 transform hover:scale-110">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:transform hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
};


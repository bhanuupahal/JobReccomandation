import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`bg-gradient-to-r from-blue-50 to-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600 flex items-center gap-2 transition-all duration-300 hover:scale-105">
            <i className="fa-brands fa-slack text-blue-600 text-3xl"></i> 
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">re<span className="text-black font-extrabold">join</span></span>
          </div>

          {/* Hamburger Icon for mobile */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-md bg-blue-100 hover:bg-blue-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl text-blue-600`}></i>
            </button>
          </div>

          {/* Navigation Links and Buttons - Desktop */}
          <ul className="hidden md:flex md:flex-row justify-between items-center md:space-x-9 font-bold">
            <li className="relative group">
              <Link to="/" className="transition-colors duration-300 hover:text-blue-600 py-2 px-3 rounded-md hover:bg-blue-50 inline-block">Home</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="relative group">
              <Link to="/about" className="transition-colors duration-300 hover:text-blue-600 py-2 px-3 rounded-md hover:bg-blue-50 inline-block">About Us</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="relative group">
              <Link to="/dashboard" className="transition-colors duration-300 hover:text-blue-600 py-2 px-3 rounded-md hover:bg-blue-50 inline-block">My Dashboard</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="relative group">
              <Link to="/contact" className="transition-colors duration-300 hover:text-blue-600 py-2 px-3 rounded-md hover:bg-blue-50 inline-block">Contact Us</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </li>
          </ul>

          {/* Buttons for desktop view */}
          <div className="hidden md:flex space-x-6">
            <Link to="/submitjob" className="h-10 px-6 rounded-full flex justify-center items-center bg-gradient-to-r from-orange-500 to-orange-400 cursor-pointer text-white text-base font-bold hover:from-orange-400 hover:to-orange-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              Submit a Job
            </Link>
            <Link to="/signup" className="h-10 px-6 flex justify-center items-center rounded-full cursor-pointer text-white text-base font-bold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              Register
            </Link>
          </div>
        </div>

        {/* Mobile Menu - Separate section that slides in */}
        <div 
          className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div 
            className={`bg-white w-4/5 max-w-sm h-screen shadow-xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="p-5 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-blue-600 flex items-center gap-2">
                  <i className="fa-brands fa-slack text-blue-600 text-2xl"></i> 
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">re<span className="text-black font-extrabold">join</span></span>
                </div>
                <button 
                  onClick={toggleMenu}
                  className="p-2 rounded-md hover:bg-blue-800 transition-colors duration-300 focus:outline-none"
                >
                  <i className="fas fa-times text-xl text-blue-600"></i>
                </button>
              </div>
            </div>
            
            <ul className="flex flex-col space-y-4 p-5">
              <li>
                <Link 
                  to="/" 
                  className="block py-2 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block py-2 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard" 
                  className="block py-2 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block py-2 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            
            <div className="p-5 border-t border-gray-200">
              <Link 
                to="/submitjob" 
                className="block w-full mb-4 py-2 text-center rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold hover:from-orange-400 hover:to-orange-300 transition-all duration-300 shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Submit a Job
              </Link>
              <Link 
                to="/signup" 
                className="block w-full py-2 text-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;





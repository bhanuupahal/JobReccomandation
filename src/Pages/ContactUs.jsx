import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="hero w-full flex justify-center items-center bg-blue-400 p-10 md:p-20 relative">
        <div className="w-full h-full bg-gradient-to-r from-blue-600 to-red-600 opacity-40 absolute"></div>
        <h3 className="relative z-10 text-white font-semibold text-2xl md:text-3xl">
          Contact Us
        </h3>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col-reverse md:flex-row gap-8">
          {/* Left Side - Map and Contact Info (displays second on mobile) */}
          <div className="w-full md:w-1/2 space-y-8">
            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h2>
              <div className="aspect-square w-full max-w-md mx-auto bg-gray-200 shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.5656777694236!2d75.7042905!3d29.7232319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391237faf7190271%3A0xf5c6d6eefa89c0a2!2sGuru%20Jambheshwar%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1710349480985!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location at GPJ University, Hisar, Haryana"
                  className="shadow-md"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-700">Our Location</h4>
                  <p className="text-gray-600">123 Job Street, Career City, 10001</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <FaPhone className="text-blue-600 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-700">Phone Number</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-blue-600 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-700">Email Address</h4>
                  <p className="text-gray-600">contact@jobportal.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form (displays first on mobile) */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="5"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;











import React from "react";
import { CompoHeading } from "../CompoHeading";
import getHired from "../../Images/—Pngtree—job bag icon_4945956.png";
import hire from "../../Images/—Pngtree—job vacancy with join our_5330648.png";
import { motion } from "framer-motion";

export const ChooseOneHireOrGetHired = () => {
  const compoHeading = {
    heading: "Hire or Get Hired",
    description:
      "Hire an experienced developer or get hired by a reputable company.",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <CompoHeading data={compoHeading} />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Job Seeker Card */}
          <motion.div 
            variants={itemVariants}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3"></div>
            <div className="bg-[#f0f3fa] p-8 md:p-10 flex flex-col items-center">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white shadow-md p-4 flex justify-center items-center mb-6 transform transition-transform duration-500 hover:scale-105">
                <img
                  src={getHired}
                  alt="Find a job"
                  className="h-full w-full object-contain"
                />
              </div>
              <h2 className="font-bold text-xl md:text-2xl text-gray-800 text-center mb-4">
                DO YOU WANT TO FIND A JOB?
              </h2>
              <p className="text-center text-gray-600 mb-8 max-w-md">
                Search for jobs that match your skills, apply with ease, and build a professional resume that stands out to employers.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full font-semibold text-white hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center">
                <span className="mr-2">Find Job</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Employer Card */}
          <motion.div 
            variants={itemVariants}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-3"></div>
            <div className="bg-white p-8 md:p-10 flex flex-col items-center border border-gray-100">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#f0f3fa] shadow-md p-4 flex justify-center items-center mb-6 transform transition-transform duration-500 hover:scale-105">
                <img
                  src={hire}
                  alt="Hire candidates"
                  className="h-full w-full object-contain"
                />
              </div>
              <h2 className="font-bold text-xl md:text-2xl text-gray-800 text-center mb-4">
                ARE YOU LOOKING FOR A CANDIDATE?
              </h2>
              <p className="text-center text-gray-600 mb-8 max-w-md">
                Post job openings, browse qualified candidates, and find the perfect talent to join your team quickly and efficiently.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full font-semibold text-white hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center">
                <span className="mr-2">Find Candidate</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};


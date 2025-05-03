import React from "react";
import { CompoHeading } from "../CompoHeading";
import { motion } from "framer-motion";
import { ImHome2, ImOffice } from "react-icons/im";
import { FaCalendarAlt, FaUsers, FaGlobeAmericas, FaLaptop, FaHandshake, FaChartLine } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";

export const JobType = () => {
  const headingdata = {
    heading: "Explore Job Types",
    description:
      "Find the perfect work arrangement that fits your lifestyle and career goals",
  };

  const jobTypeData = [
    {
      title: "Work From Home",
      icon: <ImHome2 size={28} />,
      description: "Flexible remote positions that allow you to work from your home office",
      count: "1,245 jobs",
      color: "blue"
    },
    {
      title: "Internship",
      icon: <FaCalendarAlt size={28} />,
      description: "Entry-level opportunities for students and recent graduates",
      count: "876 jobs",
      color: "green"
    },
    {
      title: "Full Time",
      icon: <GiSandsOfTime size={28} />,
      description: "Permanent positions with comprehensive benefits and career growth",
      count: "3,421 jobs",
      color: "purple"
    },
    {
      title: "Part Time",
      icon: <ImOffice size={28} />,
      description: "Flexible hours allowing you to balance work with other commitments",
      count: "1,568 jobs",
      color: "orange"
    },
    {
      title: "Contract",
      icon: <FaHandshake size={28} />,
      description: "Fixed-term employment for specific projects or seasonal work",
      count: "942 jobs",
      color: "red"
    },
    {
      title: "Freelance",
      icon: <FaLaptop size={28} />,
      description: "Independent work with flexible schedules and diverse clients",
      count: "1,123 jobs",
      color: "teal"
    },
    {
      title: "On-site",
      icon: <FaUsers size={28} />,
      description: "Traditional workplace settings with in-person collaboration",
      count: "2,345 jobs",
      color: "pink"
    },
    {
      title: "International",
      icon: <FaGlobeAmericas size={28} />,
      description: "Opportunities to work abroad or with global companies",
      count: "567 jobs",
      color: "indigo"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <div className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <CompoHeading data={headingdata} />
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {jobTypeData.map((item, index) => (
            <motion.div 
              key={item.title} 
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col transform group-hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${colorMap[item.color]} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      {item.count}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="px-6 pb-6">
                  <button className="w-full py-2 border-2 border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 group-hover:border-blue-500 group-hover:text-blue-600">
                    Browse Jobs
                    <FaChartLine className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            View All Job Types
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};


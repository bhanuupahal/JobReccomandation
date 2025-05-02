import React from "react";
import { JobAdvtCard } from "../../Components/JobAdvtCard";
import { CompoHeading } from "../../Components/CompoHeading";
import { motion } from "framer-motion";
import { FaBriefcase, FaArrowRight } from "react-icons/fa";

export const RecentJobs = () => {
  const recJobs = [
    {
      jobTitle: "Hard Ware Engineer",
      type: "Fulltime",
      companyName: "IT Hardware & Network Pvt Ltd",
      location: "USA",
      salary: "$80,000 - $95,000",
      postedDate: "2 days ago",
      logo: "https://randomuser.me/api/portraits/men/41.jpg",
      isHot: true,
    },
    {
      jobTitle: "Web Designer",
      type: "Partime",
      companyName: "Spinson Software Solution",
      location: "USA, UK",
      salary: "$45,000 - $60,000",
      postedDate: "3 days ago",
      logo: "https://randomuser.me/api/portraits/women/68.jpg",
      isHot: false,
    },
    {
      jobTitle: "Frontend Developer",
      type: "Remote",
      companyName: "TechGrowth Solutions",
      location: "Worldwide",
      salary: "$70,000 - $90,000",
      postedDate: "1 day ago",
      logo: "https://randomuser.me/api/portraits/men/32.jpg",
      isHot: true,
    },
    {
      jobTitle: "Data Analyst",
      type: "Fulltime",
      companyName: "DataInsight Corp",
      location: "Canada",
      salary: "$65,000 - $85,000",
      postedDate: "5 days ago",
      logo: "https://randomuser.me/api/portraits/women/45.jpg",
      isHot: false,
    },
  ];

  const data = {
    heading: "Recent Jobs",
    description: "Check out the latest vacancies",
  };

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

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <CompoHeading data={data} />
        
        <div className="flex items-center justify-center mb-10 mt-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
              All Jobs
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors border">
              Featured
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors border">
              Full Time
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors border">
              Part Time
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors border">
              Remote
            </button>
          </div>
        </div>
        
        <motion.div 
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {recJobs.map((job, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-4">
              <JobAdvtCard data={job} />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center mt-12">
          <button className="group flex items-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105">
            Browse All Jobs
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="mt-16 bg-blue-600 rounded-xl p-8 max-w-4xl mx-auto shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">Ready to start your new career?</h3>
              <p className="opacity-90">Thousands of jobs are waiting for you</p>
            </div>
            <button className="whitespace-nowrap bg-white text-blue-600 hover:bg-blue-50 transition-colors px-6 py-3 rounded-lg font-bold shadow-md flex items-center gap-2">
              <FaBriefcase />
              Post a Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


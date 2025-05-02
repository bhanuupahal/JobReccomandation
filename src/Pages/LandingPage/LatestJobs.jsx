import React, { useState } from "react";
import { CompoHeading } from "../../Components/CompoHeading";
import { LatestJobCard } from "../../Components/LatestJobCard";
import { motion } from "framer-motion";
import { FaSearch, FaBriefcase, FaArrowRight } from "react-icons/fa";

export const LatestJobs = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const compoHeading = {
    heading: "Latest Job Opportunities",
    description: "Discover your next career move with our freshly posted positions",
  };

  const latestJobData = [
    {
      jobName: "Wanted Best Chefs",
      description:
        "We are seeking a creative and experienced chef to lead our kitchen with innovation and excellence. The ideal candidate will have a passion for culinary arts, strong leadership skills, and the ability to design exquisite menus that delight our customers.",
      payScale: "10000-20000",
      type: "Full Time",
      companyName: "G Technical Solutions",
      logo: "G",
      location: "New York, USA",
      postedDate: "2 days ago",
      featured: true,
    },
    {
      jobName: "Senior Front-end Developer",
      description:
        "Looking for an experienced Front-end Developer with expertise in React, JavaScript, and modern UI frameworks. You'll be responsible for building responsive web applications and collaborating with cross-functional teams.",
      payScale: "12000-15000",
      type: "Full Time",
      companyName: "Rosita Chatmon",
      logo: "R",
      location: "San Francisco, CA",
      postedDate: "1 day ago",
      featured: true,
    },
    {
      jobName: "Senior Software Engineer",
      description:
        "Join our engineering team to build scalable software solutions. The ideal candidate has strong problem-solving skills and experience with cloud technologies, microservices, and agile development.",
      type: "Full Time",
      companyName: "Nexius Solutions",
      logo: "N",
      location: "Austin, TX",
      postedDate: "3 days ago",
    },
    {
      jobName: "Senior UX/UI Designer",
      description:
      "Create exceptional user experiences for our digital products. We're looking for someone with a strong portfolio, expertise in design systems, and the ability to translate user needs into elegant solutions.",
      payScale: "18000-25000",
      type: "Part Time",
      companyName: "Indigo Design",
      logo: "I",
      location: "Chicago, IL",
      postedDate: "5 days ago",
    },
    {
      jobName: "Senior Data Scientist",
      description:
        "Help us turn data into actionable insights. You'll work with large datasets, develop machine learning models, and collaborate with stakeholders to drive data-informed decisions.",
      payScale: "20000-30000",
      type: "Work From Home",
      companyName: "Zeta Solutions",
      logo: "Z",
      location: "Remote",
      postedDate: "1 week ago",
      featured: true,
    },
    {
      jobName: "Senior Blockchain Developer",
      description:
      "Develop cutting-edge blockchain solutions for our financial technology platform. Experience with smart contracts, distributed systems, and cryptography is essential.",
      payScale: "25000-40000",
      type: "Full Time",
      companyName: "Delta Solutions",
      logo: "D",
      location: "Miami, FL",
      postedDate: "3 days ago",
    },
    {
      jobName: "Senior Product Manager",
      description:
        "Lead product strategy and execution for our SaaS platform. You'll work closely with engineering, design, and marketing teams to deliver features that delight our customers.",
      payScale: "22000-35000",
      type: "Full Time",
      companyName: "Omega Solutions",
      logo: "O",
      location: "Seattle, WA",
      postedDate: "4 days ago",
    },
    {
      jobName: "Senior DevOps Engineer",
      description:
      "Build and maintain our cloud infrastructure and CI/CD pipelines. Experience with AWS, Kubernetes, and infrastructure as code is required for this position.",
      payScale: "28000-45000",
      type: "Work From Home",
      companyName: "Sigma Solutions",
      logo: "S",
      location: "Remote",
      postedDate: "2 days ago",
    },
  ];

  // Filter jobs based on selected type
  const filteredJobs = activeFilter === "All" 
    ? latestJobData 
    : latestJobData.filter(job => job.type === activeFilter);

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
    <div className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <CompoHeading data={compoHeading} />
        
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12 mt-8">
          <div className="bg-white p-2 rounded-full shadow-lg flex items-center">
            <div className="bg-blue-600 p-3 rounded-full text-white">
              <FaSearch />
            </div>
            <input 
              type="text" 
              placeholder="Search for jobs..." 
              className="flex-grow px-4 py-2 focus:outline-none text-gray-700"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "Full Time", "Part Time", "Work From Home"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === type
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border"
              }`}
            >
              {type === "All" ? "All Jobs" : type}
            </button>
          ))}
        </div>

        {/* Job Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredJobs.map((job) => (
            <motion.div key={job.jobName} variants={itemVariants}>
              <LatestJobCard data={job} />
            </motion.div>
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No jobs found</h3>
            <p className="text-gray-600">Try changing your search or filter criteria</p>
          </div>
        )}
        
        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <button className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            View All Opportunities
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-blue-600">
            <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
            <p className="text-gray-600">Active Job Listings</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-green-600">
            <div className="text-4xl font-bold text-green-600 mb-2">2,500+</div>
            <p className="text-gray-600">Companies Hiring</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-purple-600">
            <div className="text-4xl font-bold text-purple-600 mb-2">10M+</div>
            <p className="text-gray-600">Successful Placements</p>
          </div>
        </div>
      </div>
    </div>
  );
};


import React from "react";
import { CompoHeading } from "../../Components/CompoHeading";
import megaPhoneImg from "../../Images/megaphone.png";
import userImg from "../../Images/user.png";
import pencilImg from "../../Images/pencil.png";
import graphImg from "../../Images/business-and-finance.png";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const compoHeading = {
    heading: "How It Works",
    description: "Discover the benefits of using our job recommendation app",
  };

  const howItWorksData = [
    {
      icon: megaPhoneImg,
      title: "Create Account",
      description: "Sign up with your email address and create a password",
      color: "blue",
      delay: 0.1
    },
    {
      icon: userImg,
      title: "Register",
      description:
        "Fill out your profile information and select your preferred job categories",
      color: "purple",
      delay: 0.2
    },
    {
      icon: pencilImg,
      title: "Search Jobs",
      description: "Search for jobs in your area, by location, or by industry",
      color: "green",
      delay: 0.3
    },
    {
      icon: graphImg,
      title: "Save And Apply",
      description:
        "Save your favorite jobs and apply them directly from our app",
      color: "orange",
      delay: 0.4
    },
  ];

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
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <CompoHeading data={compoHeading} />
        
        {/* Process Steps */}
        <motion.div 
          className="relative mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Connection Line */}
          {/* <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div> */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {howItWorksData.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center"
                variants={itemVariants}
              >
                {/* Step Number */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm lg:hidden">
                  {index + 1}
                </div>
                
                {/* Icon Container */}
                <div className={`relative w-32 h-32 rounded-full flex justify-center items-center bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 shadow-lg mb-6 transition-transform duration-300 hover:scale-110`}>
                  {/* Step Number for Desktop */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md hidden lg:flex">
                    {index + 1}
                  </div>
                  
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-16 w-16 object-contain"
                  />
                  
                  {/* Arrow for desktop */}
                  {index < howItWorksData.length - 1 && (
                    <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden lg:block">
                      <ArrowRight className="text-blue-400" size={24} />
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="text-center px-4">
                  <h3 className={`font-bold text-xl mb-2 text-${item.color}-600`}>{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a href="#" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  );
};


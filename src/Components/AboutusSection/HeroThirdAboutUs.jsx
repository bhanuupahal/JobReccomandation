import React from "react";
import { Users, Rocket, Building2, SmilePlus } from "lucide-react";
import { motion } from "framer-motion";

export const HeroThirdAboutUs = () => {
  const numberData = [
    {
      icon: <Users size={40} className="text-blue-600" />,
      number: "10,000+",
      description: "Members",
      color: "blue"
    },
    {
      icon: <Rocket size={40} className="text-purple-600" />,
      number: "2000+",
      description: "Jobs",
      color: "purple"
    },
    {
      icon: <Building2 size={40} className="text-green-600" />,
      number: "500+",
      description: "Companies",
      color: "green"
    },
    {
      icon: <SmilePlus size={40} className="text-yellow-600" />,
      number: "10000+",
      description: "Happy Customers",
      color: "yellow"
    }
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
    <section className="relative py-20 overflow-hidden bg-cover bg-center bg-fixed" 
             style={{backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"}}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We've helped thousands of job seekers find their dream jobs and companies find the perfect candidates.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {numberData.map((data, index) => (
            <motion.div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-20 h-20 rounded-full bg-${data.color}-500/20 flex items-center justify-center mb-4`}>
                  {data.icon}
                </div>
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">{data.number}</h3>
                <div className="w-12 h-1 bg-white/30 rounded-full mb-3"></div>
                <p className="text-gray-200 font-medium">{data.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Join Our Community
          </a>
        </div>
      </div>
    </section>
  );
};



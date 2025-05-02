import React from 'react'
import { CompoHeading } from '../../Components/CompoHeading'
import { motion } from 'framer-motion'
import { FaCashRegister, FaCut, FaCar, FaServer, FaHeadset, FaUserNurse, 
         FaTruck, FaLaptopCode, FaChalkboardTeacher, FaHeartbeat, 
         FaChartLine, FaUtensils } from 'react-icons/fa'
import { JobCategoryCard } from '../../Components/JobCategoryCard'

export const JobCategory = () => {
    const compoHeading = {
        heading: "Job Categories",
        description: "Browse through our wide range of job categories",
    }
    
    const jobCategoryData = [
        {
            title: "Cashier",
            icon: <FaCashRegister size={32} />,
            color: "blue",
            count: "124 Jobs"
        },
        {
            title: "Beautician",
            icon: <FaCut size={32} />,
            color: "pink",
            count: "87 Jobs"
        },
        {
            title: "Driver",
            icon: <FaCar size={32} />,
            color: "green",
            count: "156 Jobs"
        },
        {
            title: "IT Hardware",
            icon: <FaServer size={32} />,
            color: "purple",
            count: "98 Jobs"
        },
        {
            title: "BPO",
            icon: <FaHeadset size={32} />,
            color: "orange",
            count: "112 Jobs"
        },
        {
            title: "Nurse",
            icon: <FaUserNurse size={32} />,
            color: "red",
            count: "76 Jobs"
        },
        {
            title: "Delivery",
            icon: <FaTruck size={32} />,
            color: "yellow",
            count: "143 Jobs"
        },
        {
            title: "IT Software",
            icon: <FaLaptopCode size={32} />,
            color: "indigo",
            count: "205 Jobs"
        },
        {
            title: "Teacher",
            icon: <FaChalkboardTeacher size={32} />,
            color: "teal",
            count: "92 Jobs"
        },
        {
            title: "Life Insurance",
            icon: <FaHeartbeat size={32} />,
            color: "cyan",
            count: "64 Jobs"
        },
        {
            title: "Sales",
            icon: <FaChartLine size={32} />,
            color: "amber",
            count: "178 Jobs"
        },
        {
            title: "Chef",
            icon: <FaUtensils size={32} />,
            color: "rose",
            count: "83 Jobs"
        }
    ]
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    }
        
    return (
        <div className='flex flex-col justify-around items-center py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white'>
            <div className="container mx-auto px-4">
                <CompoHeading data={compoHeading}/>
                
                <motion.div 
                    className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {jobCategoryData.map((item, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <JobCategoryCard data={item}/>
                        </motion.div>
                    ))}
                </motion.div>
                
                <div className="flex justify-center mt-12">
                    <button className='px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center'>
                        View All Categories
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}



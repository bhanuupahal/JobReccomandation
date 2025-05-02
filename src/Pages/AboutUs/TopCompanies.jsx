import React from 'react'
import { CompoHeading } from '../../Components/CompoHeading'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const TopCompanies = () => {
    const compoHeading = {
        heading: "Top Companies",
        description: "Some of our most popular companies",
    }

    // Company data with actual logos
    const companies = [
        { 
            id: 1, 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png", 
            name: "Microsoft", 
            industry: "Technology",
            jobCount: 45,
            bgColor: "bg-gray-100"
        },
        { 
            id: 2, 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png", 
            name: "Google", 
            industry: "Technology",
            jobCount: 38,
            bgColor: "bg-white"
        },
        { 
            id: 3, 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", 
            name: "Amazon", 
            industry: "E-commerce",
            jobCount: 52,
            bgColor: "bg-gray-100"
        },
        { 
            id: 4, 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png", 
            name: "Apple", 
            industry: "Technology",
            jobCount: 29,
            bgColor: "bg-white"
        },
        { 
            id: 5, 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/2560px-Tesla_Motors.svg.png", 
            name: "Tesla", 
            industry: "Automotive",
            jobCount: 31,
            bgColor: "bg-gray-100"
        },
        { 
            id: 6, 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png", 
            name: "Meta", 
            industry: "Technology",
            jobCount: 27,
            bgColor: "bg-white"
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
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <div className='py-20 bg-gradient-to-br from-blue-50 to-indigo-50'>
            <div className='container mx-auto px-4'>
                <CompoHeading data={compoHeading} />

                <motion.div 
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {companies.map((company, index) => (
                        <motion.div 
                            key={company.id}
                            className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1'
                            variants={itemVariants}
                        >
                            <div className='p-6 flex items-center'>
                                <div className={`w-20 h-20 ${company.bgColor} rounded-lg p-3 flex items-center justify-center mr-4 group-hover:bg-blue-50 transition-colors duration-300`}>
                                    <img 
                                        src={company.logo} 
                                        alt={`${company.name} logo`} 
                                        className='max-w-full max-h-full object-contain'
                                    />
                                </div>
                                <div className='flex-1'>
                                    <h3 className='font-bold text-lg text-gray-800 mb-1'>{company.name}</h3>
                                    <p className='text-sm text-gray-500 mb-2'>{company.industry}</p>
                                    <div className='flex items-center'>
                                        <span className='text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full'>
                                            {company.jobCount} open positions
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='px-6 py-3 border-t border-gray-100 flex justify-between items-center bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300'>
                                <span className='text-xs text-gray-500'>Updated today</span>
                                <a href="#" className='text-blue-600 text-sm font-medium flex items-center hover:text-blue-800 transition-colors'>
                                    View jobs
                                    <ArrowRight size={14} className='ml-1 transition-transform group-hover:translate-x-1' />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className='mt-16 text-center'>
                    <button className='px-8 py-4 bg-white border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105'>
                        View All Companies
                    </button>
                </div>
            </div>
        </div>
    )
}



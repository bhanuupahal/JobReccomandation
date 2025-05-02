import React, { useState } from 'react'
import { CompoHeading } from '../../Components/CompoHeading'
import img from '../../Images/pngwing.com.png'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaBriefcase, FaRegClock, FaUserTie, FaSearch, FaFilter, FaArrowRight } from 'react-icons/fa'

export const NewJobs = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [activeLocation, setActiveLocation] = useState('All')
    
    const compoHeading = {
        heading: "Newest Job Opportunities",
        description: "Explore the latest positions added to our platform"
    }

    const locations = ['All', 'Los Angeles', 'New York', 'Chicago', 'San Francisco', 'Remote']

    const newJobsData = [
        {
            logo: img,
            title: "Software Engineer",
            company: "TechVision Inc.",
            location: "Los Angeles",
            experience: "3 Years Exp",
            type: "Full Time",
            salary: "$90K-$120K",
            postedAt: "5 Hours ago",
            postedBy: "Sam Thompson",
            positions: 2,
            skills: ["React", "Node.js", "MongoDB"],
            featured: true
        },
        {
            logo: img,
            title: "Senior Software Engineer",
            company: "InnovateTech Solutions",
            location: "New York",
            experience: "5 Years Exp",
            type: "Full Time",
            salary: "$120K-$150K",
            postedAt: "6 Hours ago",
            postedBy: "John Davis",
            positions: 3,
            skills: ["Java", "Spring Boot", "AWS"],
            featured: false
        },
        {
            logo: img,
            title: "Lead Software Engineer",
            company: "FutureSoft Systems",
            location: "Chicago",
            experience: "7 Years Exp",
            type: "Full Time",
            salary: "$140K-$180K",
            postedAt: "7 Hours ago",
            postedBy: "Emma Watson",
            positions: 1,
            skills: ["Python", "Django", "React"],
            featured: true
        },
        {
            logo: img,
            title: "Data Scientist",
            company: "DataInsight Analytics",
            location: "San Francisco",
            experience: "4 Years Exp",
            type: "Full Time",
            salary: "$110K-$140K",
            postedAt: "8 Hours ago",
            postedBy: "Olivia Parker",
            positions: 4,
            skills: ["Python", "TensorFlow", "SQL"],
            featured: false
        },
        {
            logo: img,
            title: "UX/UI Designer",
            company: "CreativeDesign Studio",
            location: "Los Angeles",
            experience: "3 Years Exp",
            type: "Full Time",
            salary: "$85K-$110K",
            postedAt: "10 Hours ago",
            postedBy: "Michael Chen",
            positions: 2,
            skills: ["Figma", "Adobe XD", "Sketch"],
            featured: false
        },
        {
            logo: img,
            title: "DevOps Engineer",
            company: "CloudTech Solutions",
            location: "Remote",
            experience: "4 Years Exp",
            type: "Full Time",
            salary: "$100K-$130K",
            postedAt: "12 Hours ago",
            postedBy: "David Wilson",
            positions: 3,
            skills: ["Docker", "Kubernetes", "AWS"],
            featured: true
        }
    ]

    // Filter jobs based on search and location
    const filteredJobs = newJobsData.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             job.company.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLocation = activeLocation === 'All' || job.location === activeLocation;
        return matchesSearch && matchesLocation;
    });

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
        <div className='py-20 bg-gradient-to-b from-blue-50 to-white'>
            <div className='container mx-auto px-4'>
                <CompoHeading data={compoHeading}/>
                
                {/* Search and Filter Section */}
                <div className='max-w-4xl mx-auto mb-12'>
                    <div className='bg-white p-4 rounded-xl shadow-lg mb-6'>
                        <div className='flex flex-col md:flex-row gap-4'>
                            <div className='flex-grow relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <FaSearch className='text-gray-400' />
                                </div>
                                <input 
                                    type='text' 
                                    placeholder='Search jobs or companies...' 
                                    className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className='flex items-center gap-2 text-gray-600 bg-gray-100 px-4 py-2 rounded-lg'>
                                <FaFilter />
                                <span className='text-sm font-medium'>Filters</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Location Filters */}
                    <div className='flex flex-wrap justify-center gap-3 mb-8'>
                        {locations.map(location => (
                            <button
                                key={location}
                                onClick={() => setActiveLocation(location)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    activeLocation === location
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border'
                                }`}
                            >
                                {location}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Job Cards */}
                <motion.div 
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {filteredJobs.map((job, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1 ${job.featured ? 'ring-2 ring-blue-500' : 'border border-gray-100'}`}
                        >
                            {job.featured && (
                                <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 absolute right-0 shadow-md rounded-bl-lg">
                                    Featured
                                </div>
                            )}
                            
                            <div className='p-6'>
                                {/* Company Logo and Info */}
                                <div className='flex items-center mb-4'>
                                    <div className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 overflow-hidden'>
                                        <img src={job.logo} alt={job.company} className='w-10 h-10 object-contain' />
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors'>{job.title}</h3>
                                        <p className='text-gray-600 text-sm'>{job.company}</p>
                                    </div>
                                </div>
                                
                                {/* Job Details */}
                                <div className='grid grid-cols-2 gap-3 mb-4'>
                                    <div className='flex items-center text-gray-600 text-sm'>
                                        <FaMapMarkerAlt className='mr-2 text-blue-500' />
                                        {job.location}
                                    </div>
                                    <div className='flex items-center text-gray-600 text-sm'>
                                        <FaBriefcase className='mr-2 text-blue-500' />
                                        {job.type}
                                    </div>
                                    <div className='flex items-center text-gray-600 text-sm'>
                                        <FaRegClock className='mr-2 text-blue-500' />
                                        {job.postedAt}
                                    </div>
                                    <div className='flex items-center text-gray-600 text-sm'>
                                        <FaUserTie className='mr-2 text-blue-500' />
                                        {job.experience}
                                    </div>
                                </div>
                                
                                {/* Salary and Positions */}
                                <div className='flex justify-between items-center mb-4'>
                                    <div className='bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium'>
                                        {job.salary}
                                    </div>
                                    <div className='text-gray-600 text-sm'>
                                        {job.positions} {job.positions > 1 ? 'positions' : 'position'}
                                    </div>
                                </div>
                                
                                {/* Skills */}
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {job.skills.map((skill, i) => (
                                        <span key={i} className='bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs'>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Apply Button */}
                                <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md'>
                                    Apply Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                
                {/* No Results Message */}
                {filteredJobs.length === 0 && (
                    <div className='text-center py-12 bg-white rounded-xl shadow-md'>
                        <div className='text-5xl mb-4'>🔍</div>
                        <h3 className='text-xl font-bold text-gray-800 mb-2'>No jobs found</h3>
                        <p className='text-gray-600'>Try changing your search or filter criteria</p>
                    </div>
                )}
                
                {/* View All Jobs Button */}
                <div className='flex justify-center mt-8'>
                    <button className='group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
                        View All Jobs
                        <FaArrowRight className='group-hover:translate-x-1 transition-transform' />
                    </button>
                </div>
                
                {/* Stats Section */}
                <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <div className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center'>
                        <div className='text-4xl font-bold text-blue-600 mb-2'>1,200+</div>
                        <p className='text-gray-600'>New Jobs This Week</p>
                    </div>
                    <div className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center'>
                        <div className='text-4xl font-bold text-green-600 mb-2'>850+</div>
                        <p className='text-gray-600'>Companies Hiring</p>
                    </div>
                    <div className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center'>
                        <div className='text-4xl font-bold text-purple-600 mb-2'>24/7</div>
                        <p className='text-gray-600'>Support Available</p>
                    </div>
                    <div className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center'>
                        <div className='text-4xl font-bold text-orange-600 mb-2'>95%</div>
                        <p className='text-gray-600'>Successful Placements</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


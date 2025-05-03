import React, { useState, useEffect } from 'react'
import { CompoHeading } from '../CompoHeading'
import img from "../../Images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
import img1 from "../../Images/jurica-koletic-7YVZYZeITc8-unsplash.jpg"
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaArrowLeft, FaStar, FaLinkedin, FaGlobe } from "react-icons/fa";

export const FeaturedEmployers = () => {
    const heading = {
        heading: 'Featured Employers',
        description: 'Connect with top companies actively hiring talent'
    }

    const employeesData = [
        {
            id: 1,
            name: "Zonty Jakhar",
            title: "NextJS Developer",
            experience: "3 Years",
            profilePic: img1,
            company: "TechNova Solutions",
            location: "San Francisco, CA",
            rating: 4.8,
            openPositions: 5,
            skills: ["NextJS", "React", "TypeScript", "Node.js"],
            bio: "Experienced NextJS developer with a passion for creating performant web applications."
        },
        {
            id: 2,
            name: "Dolly Kakkar",
            title: "MERN Developer",
            experience: "5 Years",
            profilePic: img,
            company: "WebStack Innovations",
            location: "New York, NY",
            rating: 4.9,
            openPositions: 3,
            skills: ["MongoDB", "Express", "React", "Node.js"],
            bio: "Full-stack developer specializing in MERN stack with expertise in building scalable applications."
        },
        {
            id: 3,
            name: "Bhannu Pahal",
            title: "React Developer",
            experience: "2 Years",
            profilePic: img,
            company: "DigitalCraft Studios",
            location: "Austin, TX",
            rating: 4.7,
            openPositions: 2,
            skills: ["React", "Redux", "JavaScript", "CSS"],
            bio: "Frontend specialist with a focus on creating beautiful and responsive user interfaces."
        },
        {
            id: 4,
            name: "Veena Sharma",
            title: "MERN Developer",
            experience: "3 Years",
            profilePic: img,
            company: "CodeSphere Inc.",
            location: "Seattle, WA",
            rating: 4.6,
            openPositions: 4,
            skills: ["MongoDB", "Express", "React", "Node.js"],
            bio: "Passionate about building robust web applications with modern JavaScript frameworks."
        },
    ]

    const [currentSlide, setCurrentSlide] = useState(0)
    const [autoplay, setAutoplay] = useState(true)
    const [direction, setDirection] = useState(1) // 1 for right, -1 for left

    useEffect(() => {
        let interval
        if (autoplay) {
            interval = setInterval(() => {
                setCurrentSlide((prevSlide) => (prevSlide + direction + employeesData.length) % employeesData.length)
            }, 5000)
        }
        return () => clearInterval(interval)
    }, [autoplay, direction, employeesData.length])

    const handleLeftClick = () => {
        setAutoplay(false)
        setDirection(-1)
        setCurrentSlide((prevSlide) => (prevSlide - 1 + employeesData.length) % employeesData.length)
    }

    const handleRightClick = () => {
        setAutoplay(false)
        setDirection(1)
        setCurrentSlide((prevSlide) => (prevSlide + 1) % employeesData.length)
    }

    const handleDotClick = (index) => {
        setAutoplay(false)
        setCurrentSlide(index)
    }

    // Variants for animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        },
        exit: {
            y: -20,
            opacity: 0,
            transition: { duration: 0.3 }
        }
    }

    // Calculate visible cards based on screen size
    const getVisibleCards = () => {
        // For simplicity, we'll show 1 card on mobile, 2 on tablet, 3 on desktop
        // In a real implementation, you might want to use a hook to detect screen size
        const indices = []
        for (let i = 0; i < 3; i++) {
            indices.push((currentSlide + i) % employeesData.length)
        }
        return indices
    }

    const visibleCardIndices = getVisibleCards()

    return (
        <div className='py-20 bg-gradient-to-b from-white to-blue-50'>
            <div className='container mx-auto px-4'>
                <CompoHeading data={heading} />
                
                <div className='relative mt-16 max-w-6xl mx-auto'>
                    {/* Navigation arrows with improved styling */}
                    <button 
                        onClick={handleLeftClick}
                        className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400'
                        aria-label="Previous employer"
                    >
                        <FaArrowLeft className='text-blue-600' size={20} />
                    </button>
                    
                    <motion.div 
                        className='flex flex-wrap justify-center gap-6 md:gap-8'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <AnimatePresence mode="wait">
                            {visibleCardIndices.map((index, i) => (
                                <motion.div 
                                    key={`card-${employeesData[index].id}`}
                                    className={`w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] ${i > 0 ? 'hidden sm:block' : ''} ${i > 1 ? 'hidden lg:block' : ''}`}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <EmployerCard data={employeesData[index]} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                    
                    <button 
                        onClick={handleRightClick}
                        className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400'
                        aria-label="Next employer"
                    >
                        <FaArrowRight className='text-blue-600' size={20} />
                    </button>
                </div>
                
                {/* Pagination dots */}
                <div className='flex justify-center mt-10 gap-2'>
                    {employeesData.map((_, index) => (
                        <button
                            key={`dot-${index}`}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentSlide === index 
                                    ? 'bg-blue-600 w-8' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
                
                {/* CTA Button */}
                <div className='flex justify-center mt-12'>
                    <button className='group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2'>
                        View All Employers
                        <FaArrowRight className='group-hover:translate-x-1 transition-transform' />
                    </button>
                </div>
            </div>
        </div>
    )
}

// New component for employer cards with enhanced design
const EmployerCard = ({ data }) => {
    const { name, title, experience, profilePic, company, location, rating, openPositions, skills, bio } = data
    
    return (
        <div className='bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-2'>
            {/* Card header with gradient background */}
            <div className='bg-gradient-to-r from-blue-600 to-indigo-600 p-6 relative'>
                <div className='flex items-center gap-4'>
                    <div className='w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-md'>
                        <img 
                            src={profilePic} 
                            alt={name} 
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='text-white'>
                        <h3 className='text-xl font-bold'>{name}</h3>
                        <p className='opacity-90'>{title}</p>
                        <div className='flex items-center mt-1'>
                            <FaStar className='text-yellow-300 mr-1' />
                            <span>{rating}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Card body */}
            <div className='p-6 flex-grow'>
                <div className='mb-4'>
                    <h4 className='font-semibold text-gray-700'>{company}</h4>
                    <p className='text-gray-500 text-sm'>{location}</p>
                </div>
                
                <p className='text-gray-600 mb-4'>{bio}</p>
                
                <div className='mb-4'>
                    <h5 className='text-sm font-semibold text-gray-700 mb-2'>Skills</h5>
                    <div
                        className='flex flex-wrap gap-2'
                        style={{ maxWidth: '200px' }}
                    >
                        {skills.map((skill, index) => (
                            <span 
                                key={index}
                                className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs mr-2 mb-2'
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <FaGlobe className='text-gray-500 mr-2' />
                        <p className='text-gray-500 text-sm'>{openPositions} open positions</p>
                    </div>
                    <a 
                        href={`https://www.linkedin.com/in/${name.toLowerCase().replace(/\s+/g, '-')}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2'
                    >
                        Connect on LinkedIn
                        <FaLinkedin className='text-white' />
                    </a>
                </div>
            </div>
        </div>
    )
}



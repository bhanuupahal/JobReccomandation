import React from 'react'
import { FaMapMarkerAlt, FaBriefcase, FaRegClock, FaUserTie } from 'react-icons/fa'

export const NewJobCard = ({ data }) => {
    const { 
        logo, 
        title, 
        company, 
        location, 
        experience, 
        type, 
        salary, 
        postedAt, 
        positions, 
        skills,
        featured
    } = data;

    return (
        <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1 relative ${featured ? 'ring-2 ring-blue-500' : 'border border-gray-100'}`}>
            {featured && (
                <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 absolute right-0 shadow-md rounded-bl-lg">
                    Featured
                </div>
            )}
            
            <div className='p-6'>
                {/* Company Logo and Info */}
                <div className='flex items-center mb-4'>
                    <div className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 overflow-hidden'>
                        <img src={logo} alt={company} className='w-10 h-10 object-contain' />
                    </div>
                    <div>
                        <h3 className='text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors'>{title}</h3>
                        <p className='text-gray-600 text-sm'>{company}</p>
                    </div>
                </div>
                
                {/* Job Details */}
                <div className='grid grid-cols-2 gap-3 mb-4'>
                    <div className='flex items-center text-gray-600 text-sm'>
                        <FaMapMarkerAlt className='mr-2 text-blue-500' />
                        {location}
                    </div>
                    <div className='flex items-center text-gray-600 text-sm'>
                        <FaBriefcase className='mr-2 text-blue-500' />
                        {type}
                    </div>
                    <div className='flex items-center text-gray-600 text-sm'>
                        <FaRegClock className='mr-2 text-blue-500' />
                        {postedAt}
                    </div>
                    <div className='flex items-center text-gray-600 text-sm'>
                        <FaUserTie className='mr-2 text-blue-500' />
                        {experience}
                    </div>
                </div>
                
                {/* Salary and Positions */}
                <div className='flex justify-between items-center mb-4'>
                    <div className='bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium'>
                        {salary}
                    </div>
                    <div className='text-gray-600 text-sm'>
                        {positions} {positions > 1 ? 'positions' : 'position'}
                    </div>
                </div>
                
                {/* Skills */}
                {skills && (
                    <div className='flex flex-wrap gap-2 mb-4'>
                        {skills.map((skill, i) => (
                            <span key={i} className='bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs'>
                                {skill}
                            </span>
                        ))}
                    </div>
                )}
                
                {/* Apply Button */}
                <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md'>
                    Apply Now
                </button>
            </div>
        </div>
    )
}


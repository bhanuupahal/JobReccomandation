import React from 'react'
import { CompoHeading } from '../CompoHeading'
import person1 from '../../Images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'
import person2 from '../../Images/jurica-koletic-7YVZYZeITc8-unsplash.jpg'
import { FaStar } from 'react-icons/fa'
import { Quote, ChevronRight, Award, ThumbsUp, Calendar } from 'lucide-react'

export const Testimonial = () => {
    const compoHeading = {
        heading: "Testimonials",
        description: "What our clients say about us",
    }

    const testimonialData=[
        {
            name: 'John Doe',
            title: 'Software Developer',
            img: person1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus, justo vel commodo efficitur, velit ligula pulvinar est, at lobortis enim urna in velit.',
            rating: 5,
            experience: '3 years',
            verified: true
        },
        {
            name: 'Jane Doe',
            title: 'Project Manager',
            img: person2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus, justo vel commodo efficitur, velit ligula pulvinar est, at lobortis enim urna in velit.',
            rating: 4,
            experience: '5 years',
            verified: true
        },
        {
            name: 'Michael Doe',
            title: 'Team Lead',
            img: person1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus, justo vel commodo efficitur, velit ligula pulvinar est, at lobortis enim urna in velit.',
            rating: 5,
            experience: '2 years',
            verified: false
        }
    ]
    
    return (
        <div className='flex flex-col justify-around gap-10 items-center py-20 bg-gradient-to-br from-blue-50 to-indigo-50'>
            <CompoHeading data={compoHeading}/>
            
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {testimonialData.map((item, index) => (
                        <div 
                            key={index} 
                            className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full transform hover:-translate-y-2 animate-fadeIn'
                            style={{animationDelay: `${index * 150}ms`}}
                        >
                            <div className='relative'>
                                <div className='absolute -bottom-10 left-6'>
                                    <div className='w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-md'>
                                        <img className='object-cover h-full w-full' src={item.img} alt={item.name}/>
                                    </div>
                                </div>
                                <div className='h-32 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-start justify-end p-4'>
                                    <Quote className='text-white/20' size={40} />
                                </div>
                            </div>
                            
                            <div className='p-6 pt-12 flex-grow'>
                                <div className='flex items-center mb-1'>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={`${i < item.rating ? 'text-yellow-400' : 'text-gray-300'} text-sm`} />
                                    ))}
                                </div>
                                <p className='text-gray-700 mb-4 italic'>{item.description}</p>
                                
                                <div className='flex flex-wrap gap-3 mb-4'>
                                    <div className='flex items-center text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full'>
                                        <Calendar size={14} className='mr-1' />
                                        <span>{item.experience}</span>
                                    </div>
                                    {item.verified && (
                                        <div className='flex items-center text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full'>
                                            <Award size={14} className='mr-1' />
                                            <span>Verified</span>
                                        </div>
                                    )}
                                    <div className='flex items-center text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full'>
                                        <ThumbsUp size={14} className='mr-1' />
                                        <span>Recommended</span>
                                    </div>
                                </div>
                                
                                <div className='mt-auto'>
                                    <h3 className='font-bold text-lg text-gray-800'>{item.name}</h3>
                                    <p className='text-blue-600 font-medium text-sm'>{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center">
                View All Testimonials
                <ChevronRight size={18} className="ml-1" />
            </button>
        </div>
    )
}



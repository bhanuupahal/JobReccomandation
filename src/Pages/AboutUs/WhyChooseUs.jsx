import React from 'react'
import { CompoHeading } from '../../Components/CompoHeading'
import { Shield, Award, UserCheck, Building, Smile, Clock } from 'lucide-react'

export const WhyChooseUs = () => {
    const compoHeading = {
        heading: "WHY CHOOSE US",
        description: "Some reasons why you should choose our services",
    }

    const whyChooseUsData = [
        {
            title: "Job Security",
            description: "We provide a secure and reliable platform for job seekers",
            icon: <Shield className="text-blue-600" size={40} />,
            color: "blue"
        },
        {
            title: "Job Recommendations",
            description: "Our expertise in job search helps you find the perfect job",
            icon: <Award className="text-purple-600" size={40} />,
            color: "purple"
        },
        {
            title: "Personalized Advice",
            description: "We provide personalized advice based on your job search history",
            icon: <UserCheck className="text-green-600" size={40} />,
            color: "green"
        },
        {
            title: "Recruitment Service",
            description: "We help you find recruiters and companies that align with your skills and interests",
            icon: <Building className="text-red-600" size={40} />,
            color: "red"
        },
        {
            title: "User Friendly",
            description: "Our website is user-friendly and easy to navigate",
            icon: <Smile className="text-yellow-600" size={40} />,
            color: "yellow"
        },
        {
            title: "24/7 Support",
            description: "We are always here to help you",
            icon: <Clock className="text-indigo-600" size={40} />,
            color: "indigo"
        }
    ]

    return (
        <div className='py-20 bg-gradient-to-br from-blue-50 to-indigo-50'>
            <div className='container mx-auto px-4'>
                <CompoHeading data={compoHeading} />
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
                    {whyChooseUsData.map((item, index) => (
                        <div 
                            key={index} 
                            className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full transform hover:-translate-y-2 animate-fadeIn'
                            style={{animationDelay: `${index * 100}ms`}}
                        >
                            <div className={`h-2 bg-${item.color}-500`}></div>
                            <div className='p-6 flex-grow flex flex-col'>
                                <div className='mb-4 flex justify-center'>
                                    <div className={`w-16 h-16 rounded-full bg-${item.color}-100 flex items-center justify-center`}>
                                        {item.icon}
                                    </div>
                                </div>
                                <h2 className='text-xl font-bold text-center mb-3 text-gray-800'>{item.title}</h2>
                                <p className='text-gray-600 text-center'>{item.description}</p>
                                <div className='mt-4 pt-4 border-t border-gray-100 text-center'>
                                    <a href="#" className={`text-${item.color}-600 font-medium hover:underline text-sm`}>
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className='mt-12 text-center'>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300">
                        Explore Our Services
                    </button>
                </div>
            </div>
        </div>
    )
}


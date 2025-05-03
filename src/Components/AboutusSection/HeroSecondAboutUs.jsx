import React from 'react'

export const HeroSecondAboutUs = () => {
  return (
    <>
        <div className='hero w-full flex flex-col gap-2 justify-center items-center bg-blue-400 p-20 relative'>
        <div className="w-full h-full bg-gradient-to-r from-blue-600 to-red-600 opacity-40 absolute"></div>
        <h3 className='relative z-10 text-white font-semibold text-3xl'> LET'S UPDATE YOUR SKILL WITH OUR TRAINING PROFESSIONALS... </h3>
        
            <p className='relative z-10 text-white font-semibold '>Discover the best job opportunities in your area. With our training professionals, you'll be ready to make the most of your career.</p>
            
                        <button className="z-10 px-4 mt-8 py-2 bg-[#e34317] rounded-lg font-semibold text-white hover:bg-[#9c3417]">
                Learn More
            </button>
            
         </div>
    </>
  )
}

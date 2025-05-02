import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from "react-icons/io";
import { IoChatbubbles } from "react-icons/io5";

export const EmployeeProfileCard = (props) => {
    const { name,tech,profilePic,exprience} =props.data
  return (
    <div className='w-80 border-2 flex flex-col justify-center items-center gap-2 rounded-md'>
      <div className= ' p-4 flex flex-col justify-center items-center gap-2'>
      <div className='w-32 h-32 rounded-full overflow-hidden'>
            <img src = {profilePic} alt="Profile" className='w-full h-full object-cover'/>
       </div>
       <h2 className='font-semibold text-2xl'>{name}</h2>
       <p className='text-gray-800'>{tech} ({exprience} Exp)</p>
       <button className='border border-gray-400 py-0.5 px-2 text-sm rounded-sm'>
            view Details
       </button>
      </div>
        <div className='flex justify-center items-center p-4 gap-1 w-full border-t'>
           <div className='border border-gray-200 p-2 rounded-full'>
              <FaPhoneAlt className=' text-blue-600'/>
           </div>
            <div className='border border-gray-200 p-2 rounded-full'>
              <IoMdMail className='text-blue-600'/>
            </div>
            <div className='border border-gray-200 p-2 rounded-full '>
              <IoChatbubbles className='text-blue-600'/>
            </div>
        </div>


    </div>
  )
}

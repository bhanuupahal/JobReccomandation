import React from 'react'

export const CompoHeading = (props) => {
    const { heading, description } = props.data
  return (
    <div className="text-center">
        <h2 className="font-bold text-3xl text-red-700">{heading}</h2>
        <p className='mt-2'>{description}</p>
      </div>
  )
}

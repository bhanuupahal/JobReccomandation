import React from 'react'

export const CompoHeading = (props) => {
    const { heading, description } = props.data
  return (
    <div className="text-center">
        <h2 className="font-semibold text-3xl">{heading}</h2>
        <p className='mt-2'>{description}</p>
      </div>
  )
}

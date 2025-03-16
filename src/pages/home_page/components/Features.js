import React from 'react'

function Features({ imageUrl, imageAlt, heading, text }) {
  return (
    <div className='p-2 flex flex-col md:flex-row'>
        {/* Header */}
        <div className='md:w-1/2'>
          <img src={imageUrl} alt={imageAlt} className='w-full h-full' />
        </div>

        {/* Body */}
        <div className='md:w-1/2 flex flex-col justify-center'>
          <h1 className='my-4 md:my-3 font-mont font-bold text-center text-2xl'>{heading}</h1>
          <p className='p-2 md:p-3 font-robot text-justify md:text-xl'>{text}</p>
        </div>
    </div>
  )
}

export default Features
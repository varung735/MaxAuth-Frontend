import React from 'react'

function Features({ imageUrl, imageAlt, heading, text }) {
  return (
    <div className='lg:h-96 p-2 flex flex-col md:flex-row'>
        {/* Header */}
        <div className='md:w-1/2 lg:w-1/3'>
          <img src={imageUrl} alt={imageAlt} className='size-full lg:object-contain' />
        </div>

        {/* Body */}
        <div className='md:w-1/2 lg:w-2/3 flex flex-col justify-center'>
          <h1 className='my-4 md:my-3 font-mont font-bold text-center text-2xl'>{heading}</h1>
          <p className='p-2 md:p-3 font-robot text-justify md:text-xl'>{text}</p>
        </div>
    </div>
  )
}

export default Features
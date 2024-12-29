import React from 'react'

function Features({ imageUrl, imageAlt, heading, text }) {
  return (
    <div className='p-2 flex flex-col'>
        <img src={imageUrl} alt={imageAlt} />
        <h1 className='my-4 font-mont font-bold text-center text-2xl'>{heading}</h1>
        <p className='p-2 font-robot text-justify'>{text}</p>
    </div>
  )
}

export default Features
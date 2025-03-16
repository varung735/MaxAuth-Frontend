import React from 'react';
import { FaLinkedin, FaSquareInstagram, FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className='w-full bg-blue'>
      <div className='p-3 flex justify-between items-center'>
        <h1 className='font-mont font-medium text-3xl md:text-4xl text-center'>MaxAuth</h1>
        <div className='flex justify-center items-center gap-1'>
          {/* Instagram */}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaSquareInstagram className='h-10 md:h-12 w-10 md:w-12' />
          </a>
          {/* Facebook */}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaSquareFacebook className='h-10 md:h-12 w-10 md:w-12' />
          </a>
          {/* X */}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter className='h-10 md:h-12 w-10 md:w-12' />
          </a>
          {/* LinkedIn */}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='h-10 md:h-12 w-10 md:w-12' />
          </a>
        </div>
      </div>
      <div className='p-1 md:p-2'>
        <p className='md:text-lg'>Created By @<a target='blank' href="https://varun-gupta.netlify.app">Varun Gupta</a></p>
      </div>
    </div>
  )
}

export default Footer
import React from 'react';
import { FaLinkedin, FaSquareInstagram, FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className='w-full bg-blue'>
      <div className='p-3 flex justify-between items-center'>
        <h1 className='font-mont font-medium text-3xl text-center'>MaxAuth</h1>
        <div className='flex justify-center items-center gap-1'>
          {/* Instagram */}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaSquareInstagram className='h-10 w-10' />
          </a>
          {/* Facebook */}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaSquareFacebook className='h-10 w-10' />
          </a>
          {/* X */}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter className='h-10 w-10' />
          </a>
          {/* LinkedIn */}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='h-10 w-10' />
          </a>
        </div>
      </div>
      <div className='p-1'>
        <p>Created By @<a target='blank' href="https://varun-gupta.netlify.app">Varun Gupta</a></p>
      </div>
    </div>
  )
}

export default Footer
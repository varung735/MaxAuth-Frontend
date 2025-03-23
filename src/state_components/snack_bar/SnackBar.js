import React from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";

function SnackBar({ trigger, setTrigger, success, message }) {
  return (
    <div className='absolute top-[8%] lg:top-[92%] left-[2.5%] lg:left-[69%] flex items-center justify-center w-[95%] lg:w-[30%] py-3 md:py-5 lg:py-2 rounded-md'
          style={success ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>

      {/* Icon */}
      <div className='w-[10%] flex items-center justify-center'>
        { success ?
        <FaCheckCircle className='size-7 md:size-10'/> :
        <RxCrossCircled className='size-7 md:size-10'/> }
      </div>

      {/* Message */}
      <div className='w-[80%] flex gap-4'>
        <div className='w-[80%]'>
          <h1 className='text-center md:text-2xl md:font-semi-bold'>{message}</h1>
        </div>
        <div className='w-[20%] flex justify-center items-center'>
          <button className='bg-white px-6 py-2 rounded-md' onClick={() => {setTrigger(!trigger)}}>Hide</button>
        </div>
      </div>
    </div>
  )
}

export default SnackBar
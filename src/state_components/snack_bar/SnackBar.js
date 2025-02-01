import React from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";

function SnackBar({ trigger, setTrigger, success, message }) {
  return (
    <div className='absolute top-[8%] flex items-center  w-[95%] py-3 rounded-md' style={success ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>

      {/* Icon */}
      <div className='w-[10%] flex items-center justify-center'>
        { success ?
        <FaCheckCircle className='w-7 h-7'/> :
        <RxCrossCircled className='w-7 h-7'/> }
      </div>

      {/* Message */}
      <div className='w-[80%] flex gap-4'>
        <div className='w-[80%]'>
          <h1 className='text-center'>{message}</h1>
        </div>
        <div className='w-[20%] flex justify-center items-center'>
          <button className='bg-white px-6 rounded-md' onClick={() => {setTrigger(!trigger)}}>Hide</button>
        </div>
      </div>
    </div>
  )
}

export default SnackBar
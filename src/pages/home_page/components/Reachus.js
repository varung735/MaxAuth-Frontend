import React, { useState } from 'react'

function Reachus() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit() {
    
  }

  return (
    <div>
      <h1 className='my-4 font-mont font-bold text-3xl text-center'>Reachus</h1>

      {/* Form */}
      <div className='p-5 flex flex-col gap-3'>
        {/* Email Input Form */}
        <div className='flex flex-col'>
          <label htmlFor="name" className='font-mont text-sm mb-1'>Email</label>
          <input name='name' type="text" className='p-2 border border-gray-400 rounded-md' placeholder='Enter Your Name Here..'
           value={name} onChange={(e) => {setName(e.target.value)}} />
        </div>
        
        {/* Email Input Form */}
        <div className='flex flex-col'>
          <label htmlFor="email" className='font-mont text-sm mb-1'>Email</label>
          <input name='email' type="email" className='p-2 border border-gray-400 rounded-md' placeholder='Enter Your Name Here..'
           value={email} onChange={(e) => {setEmail(e.target.value)}} />
        </div>

        {/* Message Input Form */}
        <div className='flex flex-col'>
          <label htmlFor="message" className='font-mont text-sm mb-1'>Message</label>
          <textarea name='message' type="text" className='p-2 border border-gray-400 rounded-md' placeholder='Enter Your Password Here..'
           value={message} onChange={(e) => {setMessage(e.target.password)}} />
        </div>

        {/* Submit Button */}
        <button className='w-full py-2 bg-blue rounded-md' onClick={handleSubmit()}>SUBMIT</button>
      </div>

    </div>
  )
}

export default Reachus
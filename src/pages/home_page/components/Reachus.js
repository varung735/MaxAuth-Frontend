import React, { useState } from 'react'

function Reachus() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit() {
    
  }

  return (
    <div>
      <h1 className='my-4 font-mont font-bold text-3xl text-center md:text-start md:pl-3'>Reachus</h1>

      {/* Form */}
      <div className='p-5 flex flex-col gap-3'>
        {/* Email Input Form */}
        <div className='flex flex-col'>
          <label htmlFor="name" className='font-mont text-sm md:text-lg mb-1'>Name</label>
          <input name='name' type="text" className='p-2 border border-gray-400 rounded-md' placeholder='Enter Your Name Here..'
           value={name} onChange={(e) => {setName(e.target.value)}} />
        </div>
        
        {/* Email Input Form */}
        <div className='flex flex-col'>
          <label htmlFor="email" className='font-mont text-sm md:text-lg mb-1'>Email</label>
          <input name='email' type="email" className='p-2 border border-gray-400 rounded-md' placeholder='Enter Your Email Here..'
           value={email} onChange={(e) => {setEmail(e.target.value)}} />
        </div>
        
        {/* Phone Input Form */}
        <div className='flex flex-col'>
          <label htmlFor="email" className='font-mont text-sm md:text-lg mb-1'>Phone</label>
          <input name='phone' type="number" className='p-2 border border-gray-400 rounded-md' placeholder='Enter Your Phone No Here..'
           value={phone} onChange={(e) => {setPhone(e.target.value)}} />
        </div>

        {/* Message Input Form */}
        <div className='flex flex-col'>
          <label htmlFor="message" className='font-mont text-sm md:text-lg mb-1'>Message</label>
          <textarea name='message' type="text" className='p-2 border border-gray-400 rounded-md' placeholder='Enter Your Message Here..'
           value={message} onChange={(e) => {setMessage(e.target.password)}} />
        </div>

        {/* Submit Button */}
        <button className='w-full py-2 md:py-3 bg-blue rounded-md md:text-lg' onClick={handleSubmit()}>SUBMIT</button>
      </div>

    </div>
  )
}

export default Reachus
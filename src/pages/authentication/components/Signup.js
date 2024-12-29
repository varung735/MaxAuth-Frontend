import React, { useState } from 'react'

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='p-5 bg-white'>

      <div className='flex flex-col gap-3'>
        {/* Email Input Form */}
        <div className='flex flex-col'>
          <label htmlFor="name" className='font-mont text-sm mb-1'>Name</label>
          <input name='name' type="text" className='p-2 border border-gray-400 rounded-md' placeholder='Enter Your Name Here..'
           value={name} onChange={(e) => {setName(e.target.value)}} />
        </div>
        
        {/* Email Input Form */}
        <div className='flex flex-col'>
          <label htmlFor="email" className='font-mont text-sm mb-1'>Email</label>
          <input name='email' type="email" className='p-2 border border-gray-400 rounded-md' placeholder='Enter Your Email Here..'
           value={email} onChange={(e) => {setEmail(e.target.value)}} />
        </div>

        {/* Password Input Form */}
        <div className='flex flex-col'>
          <label htmlFor="password" className='font-mont text-sm mb-1'>Password</label>
          <input name='password' type="password" className='p-2 border border-gray-400 rounded-md' placeholder='Enter Your Password Here..'
           value={password} onChange={(e) => {setPassword(e.target.password)}} />
        </div>

        {/* Submit Button */}
        <button className='w-full py-2 bg-blue rounded-md'>SUBMIT</button>
      </div>

      {/* Separator */}
      <p className='my-3 font-roboto font-thin text-lg text-center'>--- or ---</p>
      
      {/* Oauth Buttons */}
      <div className='flex flex-col gap-2'>
        <button className='w-full py-2 bg-blue rounded-md'>Google</button>
        <button className='w-full py-2 bg-blue rounded-md'>Github</button>
      </div>

    </div>
  )
}

export default Signup
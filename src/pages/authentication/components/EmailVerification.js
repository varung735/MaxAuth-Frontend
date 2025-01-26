import React, { useState } from 'react';
import { sendEmailVerificationToken, verifyEmail } from '../api_calls/calls';

function EmailVerification() {
    const [email, setEmail] = useState();
    const [isTokenReceived, setIsTokenReceived] = useState(false);
    const [token, setToken] = useState();
    const [otp, setOtp] = useState();

    async function getEmailVerificationToken() {
        const token = await sendEmailVerificationToken(email);
        setIsTokenReceived(true);
        setToken(token);
    }

    async function handleSubmit() {
        const user = await verifyEmail(token, otp);
        console.log(user);
    }

    return (
        <div className='p-5 bg-white'>

            {/* Heading */}
            <h1 className='text-center text-xl'>Verify Your Email</h1>
         
            <div className='flex flex-col gap-3'>
                {/* Email Input Form */}
                <div className='flex flex-col'>
                    <label htmlFor="email" className='font-mont text-sm mb-1'>Email</label>
                    <input name='email' type="email" className='p-2 border border-gray-400 rounded-md' placeholder='Enter Your Email Here..'
                        value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>

                {/* Button for Submitting Email */}
                { !isTokenReceived && (
                    <button className='w-full py-2 bg-blue rounded-md' onClick={() => { getEmailVerificationToken() }}>SUBMIT</button>
                ) }

                {/* Otp Input Form */}
                { isTokenReceived && (
                    <div className='flex flex-col'>
                        <label htmlFor="otp" className='font-mont text-sm mb-1'>OTP</label>
                        <input name='otp' type="number" className='p-2 border border-gray-400 rounded-md' placeholder='Enter Your OTP your received in email'
                            value={otp} onChange={(e) => { setOtp(e.target.value) }} />

                        {/* Submit Button */}
                        <button className='w-full py-2 bg-blue rounded-md' onClick={() => { handleSubmit() }}>VERIFY</button>
                    </div>
                ) }

            </div>

        </div>
    )
}

export default EmailVerification
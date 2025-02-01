import React, { useState } from 'react';
import { sendEmailVerificationToken, verifyEmail } from '../api_calls/calls';
import { useNavigate } from 'react-router-dom';

function EmailVerification({ snackBarState, snackBarMessage, popSnackBar }) {
    const [email, setEmail] = useState();
    const [isTokenReceived, setIsTokenReceived] = useState(false);
    const [token, setToken] = useState();
    const [otp, setOtp] = useState();
    const navigate = useNavigate();

    async function getEmailVerificationToken() {
        const response = await sendEmailVerificationToken(email);

        if(response.success) {
            snackBarState(response.success);
            snackBarMessage(response.message);
            setIsTokenReceived(response.success);
            setToken(response.token);
            popSnackBar();
            navigate('/dashboard');
        }
        else {
            snackBarState(response.success);
            snackBarMessage("Cannot Verify Email");
            setIsTokenReceived(response.success);
            popSnackBar();
        }
    }

    async function handleSubmit() {
        const response = await verifyEmail(token, otp);

        if(response.success) {
            snackBarState(response.success);
            snackBarMessage(response.message);
            popSnackBar();
        } 
        else {
            snackBarState(response.success);
            snackBarMessage(response.message);
            popSnackBar();
        }
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
                        <button className='mt-2 w-full py-2 bg-blue rounded-md' onClick={() => { handleSubmit() }}>VERIFY</button>
                    </div>
                ) }

            </div>

        </div>
    )
}

export default EmailVerification
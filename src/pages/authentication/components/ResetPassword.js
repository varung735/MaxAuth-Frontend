import React, { useState } from 'react';
import { sendForgetPasswordToken, resetPassword } from '../api_calls/calls';

function ResetPassword({ setToggle, snackBarState, snackBarMessage, popSnackBar }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [conPassword, setConPassword] = useState();
    const [isTokenReceived, setIsTokenReceived] = useState(false);
    const [token, setToken] = useState();
    const [otp, setOtp] = useState();

    async function getForgotPasswordToken() {
        const response = await sendForgetPasswordToken(email);
        setIsTokenReceived(true);
        setToken(response.token);
    }

    async function handleSubmit() {
        if(password === conPassword) {
            const response = await resetPassword(password, token, otp);
            
            if(response.success) {
                snackBarState(response.success);
                snackBarMessage(response.message);
                popSnackBar();
                setIsTokenReceived(!isTokenReceived);
                setToggle('login');
            }
            else {
                snackBarState(response.success);
                snackBarMessage(response.message);
                popSnackBar();
                setOtp("");
                setPassword("");
                setConPassword("");
                setIsTokenReceived(!isTokenReceived);
            }
        }
        else {
            snackBarState(false);
            snackBarMessage('Passwords Dont Match');
            popSnackBar();
        }
    }

    return (
        <div className='p-5 bg-white'>

            {/* Heading */}
            <h1 className='text-center text-xl'>Reset Password</h1>

            <div className='flex flex-col gap-3'>
                {/* Email Input Form */}
                <div className='flex flex-col'>
                    <label htmlFor="email" className='font-mont text-sm mb-1'>Email</label>
                    <input name='email' 
                        type="email" 
                        className='p-2 border border-gray-400 rounded-md' 
                        placeholder='Enter Your Email Here..'
                        value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>

                {/* Button for Submitting Email */}
                {!isTokenReceived && (
                    <button className='w-full py-2 bg-blue rounded-md' onClick={() => { getForgotPasswordToken() }}>SUBMIT</button>
                )}

                {isTokenReceived && (
                    <div>
                        {/* Otp Input Form */}
                        <div className='flex flex-col'>
                            <label htmlFor="otp" className='font-mont text-sm mb-1'>OTP</label>
                            <input name='otp' 
                                type="number" 
                                className='p-2 border border-gray-400 rounded-md' 
                                placeholder='Enter Your OTP your received in email'
                                value={otp} 
                                onChange={(e) => { setOtp(e.target.value) }} 
                            />
                        </div>
                        
                        {/* Password Input Form */}
                        <div className='flex flex-col'>
                            <label htmlFor="password" className='font-mont text-sm mb-1'>Password</label>
                            <input name='password' 
                                type="password" 
                                className='p-2 border border-gray-400 rounded-md' 
                                placeholder='Password'
                                value={password} onChange={(e) => { setPassword(e.target.value) }} 
                            />
                        </div>
                        
                        {/* Confirm Password Input Form */}
                        <div className='flex flex-col'>
                            <label htmlFor="conPassword" className='font-mont text-sm mb-1'>Confirm Password</label>
                            <input name='conPassword' 
                                type="password" 
                                className='p-2 border border-gray-400 rounded-md' 
                                placeholder='Confirm Password'
                                value={conPassword} onChange={(e) => { setConPassword(e.target.value) }} />
                        </div>

                        {/* Submit Button */}
                        <button className='w-full py-2 bg-blue rounded-md' onClick={() => { handleSubmit() }}>RESET</button>
                    </div>
                )}

            </div>

        </div>
    )
}

export default ResetPassword
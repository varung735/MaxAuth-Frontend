import React, { useState } from 'react';
import Navbar from '../../common_components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import EmailVerification from './components/EmailVerification';
import ResetPassword from './components/ResetPassword';

function Auth() {
  const [toggle, setToggle] = useState('login');
  
  function verifyEmail() {
    setToggle('email_verification');
  }

  function resetPassword() {
    setToggle('reset_password');
  }

  return (
    <div className='min-h-screen flex flex-col bg-authentication bg-cover bg-center bg-no-repeat'>
      {/* Navbar */}
      <Navbar parent={'Auth'} />

      {/* Body */}
      <div className='flex-grow bg-transparent_black flex justify-center items-center'>

        {/* Input Fields Div */}
        <div className='flex flex-col'>

          {/* Tabs div (Toggle between LogIn/ SignUp) */}
          <div className='w-full flex border-b border-gray-400'>
            {/* Log In Tab */}
            <div
              className={`px-16 py-2 w-half ${toggle === 'login' ? 'bg-white' : 'bg-blue'}`}
              onClick={() => setToggle('login')}
            >
              <h1>Log In</h1>
            </div>

            {/* Sign Up Tab */}
            <div
              className={`px-16 py-2 w-half ${toggle === 'signup' ? 'bg-white' : 'bg-blue'}`}
              onClick={() => setToggle('signup')}
            >
              <h1>Sign Up</h1>
            </div>
          </div>

          {/* Input Fields and Button */}
          <div>
            { toggle === 'signup' && (<Signup verifyEmail={verifyEmail}/>) }
            { toggle === 'login' && (<Login verifyEmail={verifyEmail} resetPassword={resetPassword} />) }
            { toggle === 'email_verification' && (<EmailVerification />) }
            { toggle === 'reset_password' && (<ResetPassword />) }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;

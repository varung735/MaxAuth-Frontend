import React, { useState } from 'react';
import Navbar from '../../common_components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import EmailVerification from './components/EmailVerification';
import ResetPassword from './components/ResetPassword';
import SnackBar from '../../state_components/snack_bar/SnackBar';

function Auth() {
  const [toggle, setToggle] = useState('login');
  const [reqSuccess, setReqSuccess] = useState();
  const [responseMessage, setResponseMessage] = useState();
  const [triggerSnackBar, setTriggerSnackBar] = useState(false);

  function snackBarState(state) {
    setReqSuccess(state);
  }

  function snackBarMessage(message) {
    setResponseMessage(message);
  }

  function popSnackBar() {
    setTriggerSnackBar(true);
    setTimeout(() => {
      setTriggerSnackBar(false)
    }, 5000);
  }
  
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

        {/* Snack Bar */}
        { triggerSnackBar && (
          <SnackBar 
            success={reqSuccess} 
            message={responseMessage} 
            trigger={triggerSnackBar} 
            setTrigger={setTriggerSnackBar} 
          />
        ) }

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
            { toggle === 'signup' && (
              <Signup 
                verifyEmail={verifyEmail}
                snackBarState={snackBarState}
                snackBarMessage={snackBarMessage}
                popSnackBar={popSnackBar}
                />
              ) }
            { toggle === 'login' && (
              <Login 
                verifyEmail={verifyEmail} 
                resetPassword={resetPassword}
                snackBarState={snackBarState}
                snackBarMessage={snackBarMessage}
                popSnackBar={popSnackBar}
                />
              ) }
            { toggle === 'email_verification' && (
              <EmailVerification 
                snackBarState={snackBarState}
                snackBarMessage={snackBarMessage}
                popSnackBar={popSnackBar}
                />
            ) }
            { toggle === 'reset_password' && (
              <ResetPassword
                setToggle={setToggle}
                snackBarState={snackBarState}
                snackBarMessage={snackBarMessage}
                popSnackBar={popSnackBar}
                />
            ) }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;

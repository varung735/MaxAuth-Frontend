import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar({ parent }) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    function logOut() {
        Cookies.set('token', null);
    }

    return (
        <div className='w-full bg-blue'>
            <div className='p-4 md:p-2 lg:p-1 pl-3 pr-3 flex items-center justify-between'>
                <div>
                    <h1 className='font-mons text-3xl md:text-4xl font-medium'>MaxAuth</h1>
                </div>
                <div>
                    <FaBars className='md:hidden h-9 w-9' onClick={() => { setIsNavOpen(!isNavOpen) }} />

                    <div className='hidden md:flex md:gap-3'>
                        {
                            (parent === 'Auth' || parent === 'Docs') &&
                            <Link to={'/'} className='p-3 text-center font-mont font-medium text-2xl'>Home</Link>
                        }
                        {
                            (parent === 'Home' || parent === 'Auth' || parent === 'Dashboard') &&
                            <Link to={'/docs'} className='p-3 text-center font-mont font-medium text-2xl'>Docs</Link>
                        }
                        {
                            (parent === 'Home' || parent === 'Docs') &&
                            <Link to={'/auth'} className='p-3 text-center font-mons font-medium text-2xl'>Join Us</Link>
                        }
                        {
                            (parent === 'Dashboard' || parent === 'ProjectDetails') &&
                            <Link to={'/profile'} className='p-3 text-center font-mons font-medium text-2xl'>Profile</Link>
                        }
                        {
                            (parent === 'Dashboard' || parent === 'ProjectDetails') &&
                            <Link to={'/'} className='p-3 text-center font-mons font-medium text-2xl' onClick={() => { logOut() }}>
                                Logout
                            </Link>
                        }
                    </div>
                </div>
            </div>

            {/* Foldable Div for Nav Links for smaller displays */}
            {isNavOpen && <div className='md:hidden border-t-2 flex flex-col'>
                {
                    (parent === 'Auth' || parent === 'Docs') &&
                    <Link to={'/'} className='p-5 border-b-2 text-center font-mont font-medium text-xl'>Home</Link>
                }
                {
                    (parent === 'Home' || parent === 'Auth' || parent === 'Dashboard') &&
                    <Link to={'/docs'} className='p-5 border-b-2 text-center font-mont font-medium text-xl'>Docs</Link>
                }
                {
                    (parent === 'Home' || parent === 'Docs') &&
                    <Link to={'/auth'} className='p-5 border-b-2 text-center font-mons font-medium text-xl'>Join Us</Link>
                }
                {
                    (parent === 'Dashboard' || parent === 'ProjectDetails') &&
                    <Link to={'/profile'} className='p-5 border-b-2 text-center font-mons font-medium text-xl'>Profile</Link>
                }
                {
                    (parent === 'Dashboard' || parent === 'ProjectDetails') &&
                    <Link to={'/'} className='p-5 border-b-2 text-center font-mons font-medium text-xl' onClick={() => { logOut() }}>
                        Logout
                    </Link>
                }
            </div>}
        </div>
    )
}

export default Navbar
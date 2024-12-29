import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar({ parent }) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className='w-full bg-blue'>
            <div className='p-4 pl-3 pr-3 flex items-center justify-between'>
                <div>
                    <h1 className='font-mons text-3xl font-medium'>MaxAuth</h1>
                </div>
                <div>
                    <FaBars className='h-9 w-9' onClick={() => {setIsNavOpen(!isNavOpen)}}/>
                </div>
            </div>
            { isNavOpen && <div className='border-t-2 flex flex-col'>
                { 
                    (parent === 'Auth' || parent === 'Docs') && 
                    <Link to={'/'} className='p-5 border-b-2 text-center font-mont font-medium text-xl'>Home</Link>
                }
                { 
                    (parent === 'Home' || parent === 'Auth') && 
                    <Link to={'/docs'} className='p-5 border-b-2 text-center font-mont font-medium text-xl'>Docs</Link>
                }
                { 
                    (parent === 'Home' || parent === 'Docs') && 
                    <Link to={'/auth'} className='p-5 border-b-2 text-center font-mons font-medium text-xl'>Join Us</Link>
                }
            </div> }
        </div>
    )
}

export default Navbar
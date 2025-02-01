import React from 'react';
import Navbar from '../../../common_components/Navbar';
import ProjectCard from './components/ProjectCard';

function Dashboard() {
  return (
    <div>
      {/* Navbar */}
      <Navbar parent={"Dashboard"} />

      {/* Main Content */}
      <div className='p-2 flex flex-col gap-4'>

        {/* Create Project */}
        <div>
          <button className='w-full p-5 text-2xl font-semi-bold rounded-md bg-blue'>Create Project</button>
        </div>

        {/* Existing Projects */}
        <h1 className='text-2xl text-center font-medium'>Projects</h1>
        <div className='flex flex-col'>
          <ProjectCard />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
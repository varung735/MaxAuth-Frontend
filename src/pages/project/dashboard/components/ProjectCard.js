import React from 'react';
import { FaListUl } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function ProjectCard({ _id, projectName, apiKey, userFields, userSchema, snackBarState, snackBarMessage, popSnackBar }) {
  const navigate = useNavigate();

  function copyToClipboard() {
    navigator.clipboard.writeText(apiKey);
    snackBarState(true);
    snackBarMessage('Copied to Clipboard');
    popSnackBar();
  }

  return (
    <div className='md:w-[48%] lg:w-[32%] flex flex-col'>

      {/* Header */}
      <div className='w-full p-4 bg-blue flex justify-between items-center'>
        <h1 className='md:text-2xl'>{projectName}</h1>
        <div className='p-3 bg-white cursor-pointer'>
          <FaListUl className='md:size-5 cursor-pointer' onClick={() => { navigate('/details', { state: { id: _id, apiKey: apiKey } }) }}/>
        </div>
      </div>

      {/* Body */}
      <div className='p-3 bg-grey flex flex-col gap-2'>

        {/* Api Key */}
        <div className='flex flex-col gap-1'>
          <h1 className='text-md md:text-lg'>Api Key</h1>
          <div className='p-2 bg-white flex items-center justify-between'>
            <h1 className='text-lg md:text-xl'>{apiKey}</h1>
            <div className='p-1 bg-grey cursor-pointer'>
              <IoCopyOutline className='size-5 md:size-6 cursor-pointer' onClick={() => { copyToClipboard() }} />
            </div>
          </div>
        </div>

        {/* User Fields */}
        <div className='flex flex-col gap-1'>
          <h1 className='text-md md:text-lg'>User Fields</h1>
          <div className='flex flex-wrap gap-2'>
            {userFields && userFields.map((field) => {
              return (
                <div key={userFields.indexOf(field)} className='p-2 bg-white rounded-md text-md md:text-lg'>{field}</div>
              );
            })}
          </div>
        </div>

        {/* User Schema */}
        <div className='flex flex-col gap-2'>
          <h1 className='text-md lg:text-lg'>User Schema</h1>
          <div className='h-96 p-3 bg-white overflow-auto'>
            <pre id="json-output" className="bg-gray-900 rounded-lg text-md md:text-md">
              {JSON.stringify(userSchema, null, 4)}
            </pre>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ProjectCard;
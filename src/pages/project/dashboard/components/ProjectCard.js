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
    <div className='flex flex-col'>

      {/* Header */}
      <div className='w-full p-4 bg-blue flex justify-between items-center'>
        <h1>{projectName}</h1>
        <div className='p-3 bg-white'><FaListUl onClick={() => { navigate('/details', { state: { id: _id, apiKey: apiKey } }) }}/></div>
      </div>

      {/* Body */}
      <div className='p-3 bg-grey flex flex-col gap-2'>

        {/* Api Key */}
        <div className='flex flex-col gap-1'>
          <h1 className='text-medium'>Api Key</h1>
          <div className='p-2 bg-white flex items-center justify-between'>
            <h1 className='text-lg'>{apiKey}</h1>
            <div className='p-1 bg-grey'>
              <IoCopyOutline className='h-5 w-5' onClick={() => { copyToClipboard() }} />
            </div>
          </div>
        </div>

        {/* User Fields */}
        <div className='flex items-center gap-1'>
          <h1 className=''>User Fields</h1>
          <div className='flex flex-wrap gap-2'>
            {userFields && userFields.map((field) => {
              return (
                <div key={userFields.indexOf(field)} className='p-2 bg-white rounded-md text-md'>{field}</div>
              );
            })}
          </div>
        </div>

        {/* User Schema */}
        <div className='flex flex-col gap-2'>
          <h1>User Schema</h1>
          <div className='p-3 bg-white'>
            <pre id="json-output" className="bg-gray-900 rounded-lg overflow-x-auto">
              {JSON.stringify(userSchema, null, 4)}
            </pre>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ProjectCard;
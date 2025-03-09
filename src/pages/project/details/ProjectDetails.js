import React, { useEffect, useState } from 'react';
import Navbar from '../../../common_components/Navbar';
import SnackBar from '../../../state_components/snack_bar/SnackBar';
import Table from './components/Table';
import { IoCopyOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import { getProject, getProjectUsers } from '../dashboard/api/calls';

function ProjectDetails() {
    const location = useLocation();
    const [project, setProject] = useState({});
    const [usersArray, setUsersArray] = useState([]);
    const [columns, setColumns] = useState([]);
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

    function convertUsertoTableRows(users) {
        const userDataArray = [];

        users.forEach((user) => {
            userDataArray.push(Object.values(user));
        });

        setUsersArray(userDataArray);
    }

    useEffect(() => {
        getProject(location.state.id)
        .then((response) => { setProject(response.project); })
        .catch((error) => { console.log(error) });

        getProjectUsers(location.state.apiKey)
        .then((response) => {
            let array = Object.keys(response.users[0]);
            array.push('Update');
            array.push('Delete');
            convertUsertoTableRows(response.users);
            setColumns(array);
         })
        .catch((error) => { console.log(error) });
    }, [location.state.id, location.state.apiKey]);

    function copyToClipboard() {
        navigator.clipboard.writeText(project.apiKey);
        snackBarState(true);
        snackBarMessage('Copied to Clipboard');
        popSnackBar();
    }

    return (
        <div>

            {/* Navbar */}
            <Navbar parent={'ProjectDetails'} />

            {/* Snack Bar */}
            {triggerSnackBar && (
                <SnackBar
                    success={reqSuccess}
                    message={responseMessage}
                    trigger={triggerSnackBar}
                    setTrigger={setTriggerSnackBar}
                />
            )}

            {/* Page */}
            <div className='bg-grey h-full flex flex-col'>

                {/* Header */}
                <div className='p-3 flex flex-col gap-2'>

                    {/* Project Name */}
                    <h1 className='text-2xl'>{project.project_name}</h1>

                    {/* Api Key */}
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-medium'>Api Key</h1>
                        <div className='p-2 bg-white flex items-center justify-between'>
                            <h1 className='text-lg'>{project.api_key}</h1>
                            <div className='p-1 bg-grey'>
                                <IoCopyOutline className='h-5 w-5' onClick={() => { copyToClipboard() }} />
                            </div>
                        </div>
                    </div>

                    {/* User Fields */}
                    <div className='flex items-center gap-1'>
                        <h1 className=''>User Fields</h1>
                        <div className='flex flex-wrap gap-2'>
                            {project.required_keys && project.required_keys.map((field) => {
                                return (
                                    <div key={project.required_keys.indexOf(field)} className='p-2 bg-white rounded-md text-md'>{field}</div>
                                );
                            })}
                        </div>
                    </div>

                </div>

                {/* User Table */}
                <div className='p-5'>
                    { usersArray.length > 0 ? (
                        <Table columns={columns}
                               rows={usersArray}
                               snackBarState={snackBarState}
                               snackBarMessage={snackBarMessage}
                               popSnackBar={popSnackBar}        
                        />
                    ) : (
                        <h1>Loading Users</h1>
                    ) }
                </div>

            </div>

        </div>
    )
}

export default ProjectDetails
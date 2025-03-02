import React, { useEffect, useState } from 'react';
import Navbar from '../../../common_components/Navbar';
import SnackBar from '../../../state_components/snack_bar/SnackBar';
import CreateProjectModal from './modals/CreateProjectModal';
import ProjectCard from './components/ProjectCard';
import { getProjects } from './api/calls';

function Dashboard() {
  const [modal, setModal] = useState(false);
  const [projects, setProjects] = useState([]);
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

  useEffect(() => {
    getProjects()
      .then((response) => { console.log(response); setProjects(response.projects) })
      .catch((error) => { console.log(error)});
  }, [modal]);

  return (
    <div>
      {/* Navbar */}
      <Navbar parent={"Dashboard"} />

      {/* Snack Bar */}
      {triggerSnackBar && (
        <SnackBar
          success={reqSuccess}
          message={responseMessage}
          trigger={triggerSnackBar}
          setTrigger={setTriggerSnackBar}
        />
      )}

      {modal && <CreateProjectModal modal={modal}
        setModal={setModal}
        snackBarState={snackBarState}
        snackBarMessage={snackBarMessage}
        popSnackBar={popSnackBar} />
      }

      {/* Main Content */}
      <div className='p-2 flex flex-col gap-4'>

        {/* Create Project */}
        <div>
          <button className='w-full p-5 text-2xl font-semi-bold rounded-md bg-blue'
            onClick={() => { setModal(!modal) }}>Create Project</button>
        </div>

        {/* Existing Projects */}
        <h1 className='text-2xl text-center font-medium'>Projects</h1>
        <div className='flex flex-col gap-3'>
          {projects && projects.map((project) => {
            return <ProjectCard key={project._id}
                    projectName={project.project_name}
                    apiKey={project.api_key}
                    userFields={project.required_keys}
                    userSchema={project.project_schema}
                    snackBarState={snackBarState}
                    snackBarMessage={snackBarMessage}
                    popSnackBar={popSnackBar} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
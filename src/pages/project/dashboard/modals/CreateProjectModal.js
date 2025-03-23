import React, { useEffect, useState } from 'react';
import { FaRegCircleXmark } from "react-icons/fa6";
import InputField from '../components/InputField';
import { createProject, addSchema } from '../api/calls';

function CreateProjectModal({ modal, setModal, snackBarState, snackBarMessage, popSnackBar }) {
  const [projectName, setProjectName] = useState('');
  const [inputFields, setInputFields] = useState([
    {
        id: 0,
        fieldName: 'Name',
        type: 'String'
    },
    {
        id: 1,
        fieldName: 'Email',
        type: 'String'
    },
    {
        id: 2,
        fieldName: 'Password',
        type: 'String'
    }
  ]);

  useEffect(() => {
    // console.log(inputFields);
  }, [inputFields]);

  async function createProjectInApi() {
    const schema = inputFields.reduce((acc, field) => {
      acc[field.fieldName] = {
        bsonType: field.type,
        description: `${field.fieldName} of the user`
      };
      return acc;
    }, {});

    const response = await createProject(projectName);

    snackBarState(response.success);
    snackBarMessage(response.message);
    popSnackBar();

    setModal(!modal);

    const projectSchema = await addSchema({
      projectId: response.project._id,
      req_keys: Object.keys(schema),
      schema: schema
    });

    snackBarState(projectSchema.success);
    snackBarMessage(projectSchema.message);
    popSnackBar();
  }

  function addInputField() {
    let newId = inputFields[inputFields.length - 1].id + 1;
    setInputFields(inputFields => [...inputFields, { id: newId, fieldName: 'Name the new field', type: 'string' }]);
  }

  function setFieldName(value, id) {
    setInputFields(inputFields => inputFields.map((field) => field.id === id ?  { ...field, fieldName: value } : field));
  }

  function deleteInputField(id) {
    setInputFields(inputFields => inputFields.filter((field) => field.id !== id));
  }

  function setInputType(id, type) {
    setInputFields(inputFields => inputFields.map((field) => field.id === id ? { ...field, type: type } : field));
  }
  
  return (
    <div className='h-full w-full bg-transparent_black absolute top-0 flex items-center justify-center'>

        <div className='max-height-[70vh] w-[95%] md:w-2/3 lg:w-1/3 bg-white'>

            {/* Header */}
            <div className='flex justify-between items-center p-5 bg-blue'>
                <h1 className='text-2xl font-medium'>Create Project</h1>
                <FaRegCircleXmark className='size-8' onClick={() => {setModal(!modal)}} />
            </div>

            {/* Body */}
            <div className='max-h-[75vh] p-2 flex flex-col gap-2 overflow-y-auto'>
            <input type="text"
              className='w-full p-2 border rounded-md'
              placeholder='Enter Your Project Name Here'
              value={projectName}
              onChange={(e) => {setProjectName(e.target.value)}}
              />
                { inputFields && inputFields.map((field) => {
                    return <InputField key={field.id}
                        id={field.id}
                        inputName={field.fieldName} 
                        inputType={field.type}
                        setInputType={setInputType}
                        deleteField={deleteInputField}
                        setFieldName={setFieldName} />
                }) }
                <button className='p-1 border rounded-md text-xl font-medium' onClick={() => {addInputField()}}>Add Fields</button>
            </div>

            {/* Footer */}
            <div className='p-2'>
                <button className='w-full p-4 bg-blue rounded-md text-xl font-medium' onClick={() => {createProjectInApi()}}>Create</button>
            </div>

        </div>

    </div>
  )
}

export default CreateProjectModal
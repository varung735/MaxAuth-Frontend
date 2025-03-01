import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";

const dataTypes = ['string', 'int', 'double', 'boolean'];

function InputField({ id, inputType, setFieldName, setInputType, inputName, deleteField }) {
  const [collapseDropDown, setCollapseDropDown] = useState(false);
  const [dropDownValue, setDropDownValue] = useState(inputType);
  const [inputValue, setInputValue] = useState(inputName);

  return (
    <div className='border rounded-md p-3 flex flex-col items-center gap-2'>
      <input type="text"
        className='w-full p-2 border rounded-md'
        placeholder='Your Input Here'
        value={inputValue}
        onChange={(e) => {setInputValue(e.target.value); setFieldName(e.target.value, id)}}
      />

      {/* Input Data Type Drop-Down */}
      <div className='w-full border rounded-md flex flex-col'>

        <div className='p-2 flex items-center justify-between' onClick={() => {setCollapseDropDown(!collapseDropDown)}}>
          <h1>{dropDownValue}</h1>
          <FaAngleDown />
        </div>

        { collapseDropDown && <div>
          { dataTypes && dataTypes.map((type) => {
            return <div className='border-t p-1' 
                      onClick={() => {setDropDownValue(type); setInputType(id, type); setCollapseDropDown(false)}}><h1>{type}</h1></div>
          }) }
        </div> }

      </div>

      {/* <FaTrash className='h-7 w-7' /> */}
      <button className='bg-blue w-full p-2 rounded-md' onClick={() => {deleteField(id)}}>Delete</button>
    </div>
  )
}

export default InputField
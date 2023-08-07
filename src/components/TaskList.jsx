/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import React from 'react';
import deletebutton from '../assets/delete-button.png'

const TaskList = (props) => {

  const onChk = () => {
    const checkBox = document.getElementById("checkbx");
    const todo = document.getElementById("todo");
    if (checkBox.checked == true){
      todo.style.textDecoration = "line-through";
    } else {
      todo.style.textDecoration = "none";
    }
  }  
  
  return (
    <div className='w-full h-full mx-auto'>
      <div className='grid grid-cols-4 items-center justify-items-center '>
        <div>
          <input  className='w-4 h-4' id='checkbx' type='checkbox'  onClick={onChk}/>
        </div>
        <div  className='text-2xl divide-none col-span-2 dark:text-white max-w-[250px] sm:max-w-[500px] break-words'>
          <li className='' id='todo'>{props.text}</li>
        </div>
        <div className=''>
          <button onClick={() => {
            props.onSelect(props.id);
          }}>
            <img src={deletebutton} width='30px' />
          </button>
        </div>
      </div>
    </div>
  );
  
}

export default TaskList;

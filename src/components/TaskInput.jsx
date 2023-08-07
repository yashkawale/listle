/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import TaskList from './TaskList';
import addbutton from '../assets/add-button.png';

const TaskInput = () => {

  const [inputTask, setInputTask] = useState('');
  const [tasks, setTasks] = useState([]);
  

  const taskEvent = (event) => {
    event.preventDefault();
    setInputTask(event.target.value);
  }

  const listTask = () => {
     setTasks(oldTasks => {
      return [...oldTasks, inputTask];
     });
     setInputTask('');
  }


  const deleteTask = (id) => {
    setTasks(oldTasks => {
      return oldTasks.filter((arrelement, index) => {
        return index !== id;
      })
     });
  }

  return (
    <div className='dark:bg-black h-screen w-full '>

        <div className='flex items-center justify-center'>
            
            <div className='mt-32 w-screen pb-4 pt-14 backdrop-blur-sm rounded-lg fixed flex justify-center'>
              <input type='text' placeholder='Enter a task' onChange={taskEvent} value={inputTask} className='text-black w-44 border-2 rounded-md dark:bg-black dark:text-white pl-4' />

              <div className='w-11 ml-6'>
                <button onClick={listTask} ><img src={addbutton} alt='add-button' /></button>
              </div>
            </div>
        
        </div>

        <div className=''>
          <div className='mt-32'>
            <ol  className='text-2xl'>
              {tasks.map((taskValue, index) => {
                return <TaskList key={index} id={index} text={taskValue} onSelect={deleteTask}/>
              })}
            </ol>
          </div>
        </div>

    </div>
  )
}

export default TaskInput;
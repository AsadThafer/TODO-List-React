import './Task.css';
import React, { useState } from 'react';
import Button from '../Button.js';


function Task(props) {
    const [status, setStatus] = useState(props.task.status);
   
    const updateTaskStatus = () => {
        status === 'TO-DO' ? setStatus('DONE') : setStatus('TO-DO');
        console.log('Update Task Status');
        if (status === 'TO-DO') {
            props.task.status = 'DONE';
        } else {
            props.task.status = 'TO-DO';
        }
        console.log(props.task);
    };

    const deleteTask = () => {
        console.log('Delete Task');
    };


    
   
    return (
        <li className={`Task-element ${status === 'TO-DO' ? 'TO-DO' : 'DONE'}`}>
        <div className='Task-element__info'>
            <h2>{props.task.title}</h2>
            <p>{props.task.Assignee}</p>
            <div  className='Task-Options'>
                <Button className='btn btn--done' onClick={updateTaskStatus}>
                {status === 'TO-DO' ? 'Done ✔️' : 'Not Done ❌'}
                </Button>
                <Button className='btn btn--delete' onClick={deleteTask} >Delete 🗑️</Button>
            </div>
        </div>
        </li>
    );
    }

    export default Task;
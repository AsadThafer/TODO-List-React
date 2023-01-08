import './Task.css';
import React, { useState } from 'react';
import Button from '../Button.js';

function Task(props) {
    const [status, setStatus] = useState(props.status);
    const [title, setTitle] = useState(props.title);
    const [Assignee, setAssignee] = useState(props.Assignee);
    
    const updateStatus = () => {
        if (status === 'TO-DO') {
        setStatus('DONE');
        } else {
        setStatus('TO-DO');
        }
    };
    
    return (
        <li className={`Task-element ${status}`}>
        <div className='Task-element__info'>
            <h2>{title}</h2>
            <p>{Assignee}</p>
            <div  className='Task-Options'>
                <Button className='btn btn--done' onClick={updateStatus}>
                {status === 'TO-DO' ? 'Done ✔️' : 'Not Done ❌'}
                </Button>
                <Button className='btn btn--delete'>Delete 🗑️</Button>
            </div>

        </div>
        </li>
    );
    }

    export default Task;
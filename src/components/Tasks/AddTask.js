import './AddTask.css';
import React, { useState } from 'react';
import Button from '../Button.js';

function AddTask(props) {
    const [title, setTitle] = useState('');
    const [Assignee, setAssignee] = useState('');
    const [status, setStatus] = useState('TO-DO');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleAssigneeChange = (event) => {
        setAssignee(event.target.value);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const TaskData = {
        title: title,
        Assignee: Assignee,
        status: status,
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddTaskData(TaskData);
        setStatus('TO-DO');
        setTitle('');
        setAssignee('');
    };
        


    return (
        <form className='startAddTask' onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Title'
                value={title}
                onChange={handleTitleChange}
            />
            <input
                type='text'
                placeholder='Assignee'
                value={Assignee}
                onChange={handleAssigneeChange}
            />
            <select
                value={status}
                onChange={handleStatusChange}
            >
                <option value='TO-DO'>TO-DO</option>
                <option value='DONE'>DONE</option>
            </select>
            
            
            <Button className='btn btn--add'
             type='submit'>Add Task</Button>
        </form>
    );
}

export default AddTask;
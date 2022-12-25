import './TaskCount.css';
import React, { useState } from 'react';

function TaskCount(props) {
    const [TodoTasksCount, setTodoTasksCount] = useState(0);
    const [DoneTasksCount, setDoneTasksCount] = useState(0);

    const updateTodoTasksCount = () => {
        setTodoTasksCount(TodoTasksCount + 1);
    };
    const updateDoneTasksCount = () => {
        setDoneTasksCount(DoneTasksCount + 1);
    };

    return(
        <div className='Task-count'>
            <div className='TaskCount__element'>
                <h2>TO-DO</h2>
                <p>{TodoTasksCount}</p>
            </div>
            <div className='TaskCount__element'>
                <h2>DONE</h2>
                <p>{DoneTasksCount}</p>
                </div>
        </div>
    );
}

export default TaskCount;
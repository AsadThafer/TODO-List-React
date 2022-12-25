import './TaskCount.css';
import React, { useState } from 'react';

function TaskCount(props) {



    const [ToDoTasks, setToDoTasks] = useState(props.tasks.filter((task) => task.status === 'TO-DO').length);
    const [DoneTasks, setDoneTasks] = useState(props.tasks.filter((task) => task.status === 'DONE').length);


    // if (props.tasks.filter((task) => task.status === 'TO-DO').length !== ToDoTasks) {
    //     setToDoTasks(ToDoTasks);
    // }
    // if (props.tasks.filter((task) => task.status === 'DONE').length !== DoneTasks) {
    //     setDoneTasks(DoneTasks);
    // }

        



    return(
        
        <div className='Task-count'>
            <div className='TaskCount__element'>
                <h2>TO-DO</h2>
                <p>{ToDoTasks}</p>
            </div>
            <div className='TaskCount__element'>
                <h2>DONE</h2>
                <p>{DoneTasks}</p>
                </div>
        </div>
    );
}

export default TaskCount;
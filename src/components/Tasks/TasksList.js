import Task from './Task.js';
import TasksSearch from './TasksSearch.js';
import React, { useState } from 'react';

function TasksList(props) {
    const [searchTerm, setSearchTerm] = useState('');

    
    const searchTaskHandler = (searchTerm) => {
        setSearchTerm(searchTerm);
        console.log(searchTerm);       
      };

    const filteredTasks = props.tasks.filter(task => {
        return task.title.includes(searchTerm);
    });



    return (
        <div>
            <TasksSearch onSearchTermChange={searchTaskHandler} />
             
        <ul className='Task-list'>
        {filteredTasks.map((task) => (
            <Task
            key={task.id}
            title={task.title}
            Assignee={task.Assignee}
            status={task.status}
            />
        ))}
        </ul>
        </div>
    );
    }

export default TasksList;
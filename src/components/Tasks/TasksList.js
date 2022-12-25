import Task from './Task.js';
import TasksSearch from './TasksSearch.js';
import React, { useState } from 'react';
import TasksToggle from './TasksToggle.js';
function TasksList(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [FilterStatus, setFilterStatus] = useState('TO-DO');


    const searchTaskHandler = (searchTerm) => {
        setSearchTerm(searchTerm);
        console.log(searchTerm);       
      };

    const TasksToggleHandler = (FilterStatus) => {
        setFilterStatus(FilterStatus);
        console.log(FilterStatus);
    };

    const filteredTasks = props.tasks.filter(task => {
        return task.title.includes(searchTerm);
    });



    const filteredTasksByStatus = filteredTasks.filter(task => {
        return task.status.includes(FilterStatus);
    });


    if (filteredTasksByStatus.length === 0) {
        return (
            <div>
                <TasksSearch onSearchTermChange={searchTaskHandler} />
                <TasksToggle onStatusChange={TasksToggleHandler}
                />
                <h2>No tasks found.</h2>
            </div>
        );
    }


    return (
        <div>
            <TasksSearch onSearchTermChange={searchTaskHandler} />
            <TasksToggle onStatusChange={TasksToggleHandler}
             />
             
        <ul className='Task-list'>
        {filteredTasksByStatus.map((task) => (
            <Task task = {task} key={task.id} 
            />
        ))}
        </ul>
        </div>
    );
    }

export default TasksList;
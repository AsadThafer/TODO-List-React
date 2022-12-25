import './TasksSearch.css';
import React, { useState } from 'react';

function TasksSearch(props) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
        props.onSearchTermChange(event.target.value);
    };

    return (
        <div className='TasksSearch'>
            <input
                type='text'
                placeholder='Search for a task'
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
        </div>
    );
}

export default TasksSearch;
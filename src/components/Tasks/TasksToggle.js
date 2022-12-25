import './TasksToggle.css';
import React, { useState } from 'react';

function TasksToggle(props) {
    const [FilterStatus, setFilteredStatus] = useState('');

    const handleStatusChange = (event) => {
        setFilteredStatus(event.target.value);
        props.onStatusChange(event.target.value);
    };


    return (
        <div className='TasksToggle'>
            <label className='Statusinfo' htmlFor='status'>Filter by Status : </label>
            <select className='StatusSelect'
                value={FilterStatus}
                onChange={handleStatusChange}
            >
                <option value=''>All</option>
                <option value='TO-DO'>TO-DO</option>
                <option value='DONE'>DONE</option>
            </select>
        </div>
    );
}

export default TasksToggle;
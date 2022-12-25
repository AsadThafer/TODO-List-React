import Task from './Task.js';

function TasksList(props) {


    return (
        <div>
        <ul className='Task-list'>
        {props.tasks.map((task) => (
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
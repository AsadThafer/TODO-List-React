import Task from "./Task.js";
function TasksList(props) {
  const Tasks = props.tasks;
  const searchTerm = props.searchTerm;
  const FilterStatus = props.FilterStatus;

  const filteredTasks = props.tasks.filter((task) => {
    return task.title.includes(searchTerm);
  });

  const filteredTasksByStatus = filteredTasks.filter((task) =>
    task.status.includes(FilterStatus)
  );

  const updateTaskHandler = (status, taskId) => {
    console.log(status, taskId);
    props.onTaskUpdate(status, taskId);
  };

  const TaskDeleteHandler = (taskId) => {
    console.log(taskId);
    Tasks.splice(
      Tasks.findIndex((task) => task.id === taskId),
      1
    );
    props.onDeleteTask(taskId);
  };

  if (filteredTasksByStatus.length === 0) {
    return (
      <div>
        <h2>No tasks found.</h2>
      </div>
    );
  }

  return (
    <div>
      <ul className="Task-list">
        {filteredTasksByStatus.map((task) => (
          <Task
            onDeleteTask={TaskDeleteHandler}
            onUpdateTaskStatus={updateTaskHandler}
            task={task}
            key={task.id}
          />
        ))}
      </ul>
      
    </div>
  );
}

export default TasksList;

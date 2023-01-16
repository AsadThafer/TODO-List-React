import Task from "./Task.js";
import "./TasksList.css";
function TasksList({
  tasks,
  searchTerm,
  FilterStatus,
  onTaskUpdate,
  onDeleteTask,
}) {
  const filteredTasks = tasks.filter((task) => {
    return task.title.includes(searchTerm);
  });

  const filteredTasksByStatus = filteredTasks.filter((task) =>
    task.status.includes(FilterStatus)
  );

  const updateTaskHandler = (status, taskId) => {
    console.log(status, taskId);
    onTaskUpdate(status, taskId);
  };

  const TaskDeleteHandler = (taskId) => {
    console.log(taskId);
    tasks.slice(
      tasks.findIndex((task) => task.id === taskId),
      1
    );
    onDeleteTask(taskId);
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

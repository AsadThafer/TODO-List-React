import "./TaskCount.css";

function TaskCount(props) {
  const ToDoTasks = props.tasks.filter(
    (task) => task.status === "TO-DO"
  ).length;

  const DoneTasks = props.tasks.filter((task) => task.status === "DONE").length;

  return (
    <div className="Task-count">
      <div className="TaskCount__element">
        <h2>TO-DO</h2>
        <p>{ToDoTasks}</p>
      </div>
      <div className="TaskCount__element">
        <h2>DONE</h2>
        <p>{DoneTasks}</p>
      </div>
    </div>
  );
}

export default TaskCount;

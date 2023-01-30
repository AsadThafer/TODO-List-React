import "./Task.css";
import Button from "../Button.js";
import { statuses } from "../../Constants.js";

function Task(props) {
  const taskId = props.task.id;
  const handledeleteTask = () => {
    props.onDeleteTask(taskId);
    console.log("Delete Task");
  };

  const handleUpdateTaskStatus = () => {
    if (props.task.status === statuses.ToDoStatus) {
      props.onUpdateTaskStatus(statuses.DoneStatus, taskId);
    } else {
      props.onUpdateTaskStatus(statuses.ToDoStatus, taskId);
    }
  };

  return (
    <li
      className={`Task-element ${
        props.task.status === statuses.ToDoStatus
          ? statuses.ToDoStatus
          : statuses.DoneStatus
      }`}
    >
      <div className="Task-element__info">
        <h2>{props.task.title}</h2>
        <p>{props.task.assignee}</p>
        <div className="Task-Options">
          <Button className="btn btn--done" onClick={handleUpdateTaskStatus}>
            {props.task.status === statuses.ToDoStatus
              ? "Done ✔️"
              : "Not Done ❌"}
          </Button>
          <Button className="btn btn--delete" onClick={handledeleteTask}>
            Delete 🗑️
          </Button>
        </div>
      </div>
    </li>
  );
}

export default Task;

import "./Task.css";
import React, { useState } from "react";
import Button from "../Button.js";
import statuses from "../../Constants.js";

function Task(props) {
  const taskId = props.task.id;
  const [status, setStatus] = useState(props.task.status);

  const HandledeleteTask = () => {
    props.onDeleteTask(taskId);
    console.log("Delete Task");
  };

  const HandleUpdateTaskStatus = () => {
    if (props.task.status === statuses.ToDoStatus) {
      setStatus(statuses.DoneStatus);
      props.onUpdateTaskStatus(statuses.DoneStatus, taskId);
    } else {
      setStatus(statuses.ToDoStatus);
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
          <Button className="btn btn--done" onClick={HandleUpdateTaskStatus}>
            {props.task.status === "TO-DO" ? "Done ✔️" : "Not Done ❌"}
          </Button>
          <Button className="btn btn--delete" onClick={HandledeleteTask}>
            Delete 🗑️
          </Button>
        </div>
      </div>
    </li>
  );
}

export default Task;

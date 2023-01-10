import "./Task.css";
import React, { useState } from "react";
import Button from "../Button.js";

const ToDoStatus = "TO-DO";
const DoneStatus = "DONE";

function Task(props) {
  const taskId = props.task.id;
  const [status, setStatus] = useState(ToDoStatus);

  const HandledeleteTask = () => {
    props.onDeleteTask(taskId);
    console.log("Delete Task");
  };

  const HandleUpdateTaskStatus = () => { 
    if (props.task.status === ToDoStatus) 
    {
      setStatus(DoneStatus);
      props.onUpdateTaskStatus(DoneStatus, taskId);
    } else {
      setStatus(ToDoStatus);
      props.onUpdateTaskStatus(ToDoStatus, taskId);
    }
    
  };

  return (
    <li className={`Task-element ${props.task.status === "TO-DO" ? "TO-DO" : "DONE"}`}>
      <div className="Task-element__info">
        <h2>{props.task.title}</h2>
        <p>{props.task.Assignee}</p>
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

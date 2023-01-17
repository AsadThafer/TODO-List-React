import "./AddTask.css";
import React, { useState } from "react";
import Button from "../Button.js";
// import TasksList from './TasksList';
import { statuses } from "../../Constants.js";
function AddTask(props) {
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState(statuses.ToDoStatus); //boolean    or 2 constants

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAssigneeChange = (event) => {
    setAssignee(event.target.value);
  };

  const cleanTaskData = () => {
    setTitle("");
    setAssignee("");
    setStatus(statuses.ToDoStatus);
  };

  const handleSubmit = (event) => {
    const taskData = {
      id: Math.random().toString(),
      title: title,
      assignee: assignee,
      status: status,
    }; //short hand property
    event.preventDefault();
    props.onAddTaskData(taskData); //camel case
    cleanTaskData(); //reseet state calll back
  };

  return (
    <form className="startAddTask" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="Assignee"
        value={assignee}
        onChange={handleAssigneeChange}
      />

      <Button className="btn btn--add" type="submit">
        Add Task
      </Button>
    </form>
  );
}

export default AddTask;

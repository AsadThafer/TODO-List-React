import "./AddTask.css";
import React, { useState } from "react";
import Button from "../Button.js";
// import TasksList from './TasksList';

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [Assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("TO-DO"); //boolean    or 2 constants

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAssigneeChange = (event) => {
    setAssignee(event.target.value);
  };

  const handleSubmit = (event) => {
    const TaskData = {
      id: Math.random().toString(),
      title: title,
      Assignee: Assignee,
      status: status,
    }; //short hand property
    event.preventDefault();
    props.onAddTaskData(TaskData); //camel case
    setTitle("");
    setAssignee("");
    setStatus("TO-DO");
    //reseet state calll back
  };

  //reseet state function

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
        value={Assignee}
        onChange={handleAssigneeChange}
      />

      <Button className="btn btn--add" type="submit">
        Add Task
      </Button>
    </form>
  );
}

export default AddTask;

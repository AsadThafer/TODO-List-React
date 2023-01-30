import Navbar from "./components/Navbar.js";
import AddTask from "./components/Tasks/AddTask.js";
import TasksList from "./components/Tasks/TasksList.js";
import TasksSearch from "./components/Tasks/TasksSearch.js";
import TasksToggle from "./components/Tasks/TasksToggle.js";
import TaskCount from "./components/Tasks/TaskCount.js";

import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const addTaskDataHandler = (enteredtask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, enteredtask];
    });
    console.log(tasks, enteredtask);
  };

  const searchTaskHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    console.log(searchTerm);
  };

  const tasksToggleHandler = (filterStatus) => {
    setFilterStatus(filterStatus);
  };

  const updateTaskHandler = (status, taskId) => {
    setTasks((prevTasks) => {
      return [
        ...prevTasks.map((task) => {
          if (task.id === taskId) {
            task.status = status;
          }
          return task;
        }),
      ];
    });
  };

  const deleteTaskHandler = (taskId) => {
    setTasks((prevTasks) => {
      return [
        ...prevTasks.filter((task) => {
          return task.id !== taskId;
        }),
      ];
    });
  };

  //app -> taskslist callback
  //
  return (
    <>
      <Navbar />
      <TasksSearch onSearchTermChange={searchTaskHandler} />
      <TasksToggle onStatusChange={tasksToggleHandler} />
      <AddTask onAddTaskData={addTaskDataHandler} />
      <TasksList
        onTaskUpdate={updateTaskHandler}
        onDeleteTask={deleteTaskHandler}
        className="Task-list"
        tasks={tasks}
        searchTerm={searchTerm}
        FilterStatus={filterStatus}
      />
      <TaskCount tasks={tasks} />
    </>
  );
}

export default App;

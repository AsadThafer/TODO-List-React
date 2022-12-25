import Navbar from './components/Navbar.js';
import AddTask from './components/Tasks/AddTask.js';
import TasksList from './components/Tasks/TasksList.js';
import { useState } from 'react';
import './App.css';

const DUMMY_TASKS = [
];

function App() {
  const [tasks, setTasks] = useState(DUMMY_TASKS);
  
  const AddTaskDataHandler = (enteredtask) => {
    setTasks((prevTasks) => {
      return [enteredtask, ...prevTasks];
    });
  };

  

  return (
    <div  >
      <Navbar />
      <AddTask onAddTaskData = {AddTaskDataHandler} />
      <TasksList className='Task-list' tasks={tasks} />
      
    </div>
 )
  
}

export default App;

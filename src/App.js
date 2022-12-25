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

  

    let TodoTasks = tasks.filter((task) => task.status === 'TO-DO');
    let DoneTasks = tasks.filter((task) => task.status === 'DONE');

  const [TodoTasksCount, setTodoTasksCount] = useState(TodoTasks.length);
  const [DoneTasksCount, setDoneTasksCount] = useState(DoneTasks.length);



  const updateTaskCountHandler =() => {
    setTodoTasksCount(TodoTasks.length);
    setDoneTasksCount(DoneTasks.length);
    console.log(TodoTasksCount);
    console.log(DoneTasksCount);
  }



  return (
    <div  >
     
      <Navbar />
      <AddTask onAddTaskData = {AddTaskDataHandler} />
      <TasksList className='Task-list' tasks={tasks} />
      

      <div className='Task-count'>

        <button onClick={updateTaskCountHandler} >Test Count </button>
        <p>TO-DO Tasks: {TodoTasksCount}</p>
        <p>DONE Tasks: {DoneTasksCount}</p>
        </div>



    </div>
 )
  
}

export default App;

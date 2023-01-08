import Navbar from './components/Navbar.js';
import Task from './components/Tasks/Task.js';
import AddTask from './components/Tasks/AddTask.js';
import './App.css';
function App() {

  const AddTaskDataHandler = (enteredtask) => {
    const taskData = {
      ...enteredtask,
      id: Math.random().toString(),
    };
    console
      .log (taskData);
  };

  return (
    <div>
      <Navbar />
      <AddTask onAddTaskData = {AddTaskDataHandler} />

      <ul className='Task-list'>
      <Task {...{
        status: 'TO-DO',
        title: 'Task 1',
        Assignee: 'Asad Asad',
      }}
       />
      <Task {...{
        status: 'TO-DO',
        title: 'Task 2',
        Assignee: 'Asad Asad',
      }}
       />
      <Task {...{
        status: 'TO-DO',
        title: 'Task 3',
        Assignee: 'Asad Asad',
      }}
        />
      <Task {...{
        status: 'TO-DO',
        title: 'Task 4',
        Assignee: 'Asad Asad',
      }}

       />
       </ul>


    </div>
 )
  ;
}

export default App;

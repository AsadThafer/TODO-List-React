import Navbar from './components/Navbar.js';
import Task from './components/Tasks/Task.js';
import AddTask from './components/Tasks/AddTask.js';
import './App.css';
function App() {
  return (
    <div>
      <Navbar />
      <AddTask
      {...{ onAddTask: (task) =>  console.log(task)
          }}
      />
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

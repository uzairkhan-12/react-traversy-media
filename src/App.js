import { useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [showAddTasks, setShowAddTasks] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'Doctors Appointment',
        day:'6th feb at 02:30pm',
        reminder:true,
    },
    {
        id:2,
        text:'Going to uni',
        day:'7th feb at 02:30pm',
        reminder:true,
    },
    {
        id:3,
        text:'Trip to Lahore',
        day:'12 Dec at morning',
        reminder:true,
    }
])
const handleAddToggle = () => {
  setShowAddTasks(!showAddTasks)
}
//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id,...task}
  setTasks([...tasks, newTask])
}
//Delete Task 
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}
const toggleReminder = (id) => {
  setTasks(tasks.map(task => 
    task.id === id ? {...task, reminder : !task.reminder} : task
  ))
  console.log(tasks)
}
  return (
    <div className="container">
      <Header title={'Task Tracker'} onAddClick={handleAddToggle} showAddTasks={showAddTasks}/>
      {showAddTasks && <AddTask addTask={addTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder} />
    </div>
  );
}

export default App;

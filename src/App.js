import { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [showAddTasks, setShowAddTasks] = useState(false)
  const [tasks, setTasks] = useState([])
const handleAddToggle = () => {
  setShowAddTasks(!showAddTasks)
}
useEffect(() => {
  getData()
},[])

const getData = async() => {
  let response = await fetch('http://localhost:5000/tasks')
  const data = await response.json()
  setTasks(data)
}
const getDataById = async(id) => {
  let response = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await response.json()
  return data
}

//Add Task
const addTask = async(task) => {
  const response = await fetch('http://localhost:5000/tasks/',{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(task)
  })
  const data = await response.json()
  // const id = Math.floor(Math.random() * 10000) + 1
  // const newTask = {id,...task}
  // setTasks([...tasks, newTask])
  setTasks([...tasks,data])
}
//Delete Task 
const deleteTask = async(id) => {
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method:"DELETE"
  })
  setTasks(tasks.filter((task) => task.id !==id))
}
const toggleReminder = async(id) => {
  const taskToToggle = await getDataById(id)
  const updTask = {...taskToToggle, reminder:!taskToToggle.reminder}

  const response = await fetch(`http://localhost:5000/tasks/${id}`,{
    method:"PUT",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(updTask)
  })
  const data = await response.json()
  
  setTasks(tasks.map(task => 
    task.id === id ? {...task, reminder : data.reminder} : task
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

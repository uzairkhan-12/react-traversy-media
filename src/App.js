import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
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
//Delete Task 
function deleteTask(id){
  console.log('delete',id)
}
  return (
    <div className="container">
      <Header title={'Task Tracker'}/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;

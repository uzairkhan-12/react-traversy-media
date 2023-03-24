import Task from "./Task"
const Tasks = ({tasks}) => {    
  return (
    <>
    <ul>
        {tasks.map(task => {
            return(
                <Task key={task.id} task={task}></Task>
            )
        })}
    </ul>
    </>
  )
}

export default Tasks
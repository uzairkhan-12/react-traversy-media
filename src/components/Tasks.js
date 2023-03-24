import Task from "./Task"
const Tasks = ({tasks , onDelete, onToggleReminder, addTask}) => {    
  return (
    <>
    {tasks.length ? 
    <ul>
        {tasks.map(task => {
            return(
                <Task key={task.id} task={task} onDelete={onDelete} onToggleReminder={onToggleReminder} ></Task>
            )
        })}
    </ul>
    : 'No tasks to show'}
    </>
  )
}

export default Tasks
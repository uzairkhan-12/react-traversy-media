import React, { useState } from 'react'

const AddTask = ({addTask}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)
    function handleAddTask(e){
        e.preventDefault()
        if(!text){
           return alert('text is required')
        }
        if(!day){
            return alert('text is required')
         }
         setText('')
         setDay('')
         setReminder(false)
         addTask({text, day , reminder})
        
    }
  return (
    <form className='add-form' onSubmit={handleAddTask}>
        <div className='form-control'>
            <label>Task</label>
            <input value={text} type='text' placeholder='Add Task' onChange={(e) => {setText(e.target.value)}}/>
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input value={day} type='text' placeholder='Add Day & Time' onChange={(e) => {setDay(e.target.value)}}/>
        </div>
        <div className='form-control form-control-check'>
            <label>Reminder</label>
            <input checked={reminder} value={reminder} type='checkbox' onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        
        <input className='btn btn-block' type="submit" value='Save Task'/>
        

    </form>
  )
}

export default AddTask

import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import './components/Notes.css'

const Notes =() => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
    id : 3,
    text: "Input Medical Details",
    day : "Feb 24 2021",
    reminder: true,
},
{
    id : 78,
    text: "Input Prescriptions",
    day : "September 3 2017",
    reminder: true,
},

{
    id : 4,
    text: " Next Date Scheduled",
    day : "June 2 2022",
    reminder: true,
}
])
//Add Toggle Reminder
const togglereminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder:
       !task.reminder} : task
       )
  )
}
// Add Task
const addTask = (task) =>{
  const id = Math.floor(Math.random() * 
  1000) + 1 
  const newTask = { id,...task}
  setTasks([...tasks,newTask])
}


// Delete task

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}
  return (
    <div className="lomo">
    <div className='container'>
     <Header onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask} />
    { showAddTask && <AddTask onAdd= {addTask} />}
     {tasks.length>0 ?<Tasks tasks= {tasks} onDelete={deleteTask} onToggle={togglereminder} />: 
     "No Tasks to display"}
    </div>
    </div>
  );
}

export default Notes;

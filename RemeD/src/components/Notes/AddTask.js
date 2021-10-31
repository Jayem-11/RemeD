import { useState } from "react"


const AddTask = ({onAdd}) => {

    const[text, setText] = useState('')
    const[day, setDay] = useState('')
    const[reminder, setReminder] = useState(false)
    
    const onSubmit = (e)=> {
        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return
        }
    onAdd({text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)
    }

    return (
            

    <form className="add-form"  onSubmit={onSubmit}>
        <div className="form-control">
            
           <textarea  
            value={text} 
            onChange={(e) => setText(e.target.value
                )} 
                />
        </div> 
      
       
        <input type= 'submit'
        checked={reminder}
        value='Save Details'
        className=" btn btn-block"/>
    </form>
    )}
            
export default AddTask
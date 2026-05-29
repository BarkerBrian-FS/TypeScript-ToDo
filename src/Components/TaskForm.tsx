import {  useState } from "react"
import type { ChangeEvent } from "react";

interface IProps{
    onAdd: ( value: string)=> void;
}

const TaskForm = (props: IProps) => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>)=> {
    setValue(event.target.value);
  }
  
  const handleAddTask = () => {
    props.onAdd(value);
    setValue("")
  }

  return (
    <>
    <section>
        <input type="text" onChange={handleInputChange} value={value}></input>
        <button onClick ={handleAddTask}>Add task</button>    
        <button onClick={()=> setValue("")}>Clear</button>  
    </section>
    </>
  )
}

export default TaskForm
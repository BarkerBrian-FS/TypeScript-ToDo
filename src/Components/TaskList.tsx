import type { ITask } from "./Tasks"
import { useState, type ChangeEvent } from "react"

interface IProps {
    list: ITask[]
    onDelete: (id: string) => void
    onUpdate: (task: ITask) => void
}
const defaultEditData: ITask = {
    id: "0",
    task: "",
}
const TaskList = (props: IProps) => {

    const { list, onDelete, onUpdate } = props;

    const [editTask, setEditTask ] = useState<ITask>(defaultEditData);

    const handleEdit = (item: ITask) => {
        setEditTask(item)
    }
    const handleUpdateTask = (event: ChangeEvent<HTMLInputElement> ) => {
        const cloneEditTask = {...editTask}
        cloneEditTask.task = event.target.value
        setEditTask(cloneEditTask)
    }
    const callBackTaskRender = (item: ITask, index: number) => {
        return <tr key={item.id} 
        style={{display:"flex", justifyContent:"space-evenly"}}>
        <td>{index + 1}</td>

            {editTask?.id == item.id && <>
            <td>
                <input type="text" value={editTask.task} onChange={handleUpdateTask}></input>
            </td>
            <td>
                <button onClick={() => {onUpdate(editTask); setEditTask(defaultEditData) }}>Confirm</button>
            </td>
            </>}
            {editTask?.id != item.id && (
            <>
                 <td>{item.task}</td>
                <td>
                    <a href="#" onClick={()=>handleEdit(item)}>Edit</a>
                </td>
                <td>
                    <a href="#" style={{color:"red"}} onClick={(event) => {event.preventDefault(); onDelete(item.id)}}>X</a>
                </td>
            </>
            
             )
            
        }
        </tr>
    }
  return (
    <>
    <table>
        <tbody>{list.map(callBackTaskRender)}</tbody>
    </table>
    </>
  )
}

export default TaskList
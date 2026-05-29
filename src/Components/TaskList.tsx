import type { ITask } from "./Tasks"

interface IProps {
    list: ITask[]
    onDelete: (id: string) => void
}
const TaskList = (props: IProps) => {

    const { list, onDelete } = props;
    const handleEdit = () => {
        
    }
    const callBackTaskRender = (item: ITask, index: number) => {
        return <tr key={item.id} style={{display:"flex", justifyContent:"space-evenly"}}>
        <td>{index + 1}</td>
        <td>{item.task}</td>
        <td>
            <a href="#" style={{color:"red"}} onClick={(event) => {event.preventDefault(); onDelete(item.id)}}>X</a>
        </td>
        <td>
            <a href="#" onClick={()=>handleEdit()}>Edit</a>
        </td>
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
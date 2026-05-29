import TaskForm from "./TaskForm"
import TaskList from "./TaskList"
import { useState } from "react"

export interface ITask {
  id: string;
  task: string;
}

const Tasks = () => {

  const [taskList, setTaskList] = useState<ITask[]>([]);

  const addNewTask = (value: string) => {
    console.log(value);
    const newTask : ITask = {id: Date.now().toString(), task: value}

    setTaskList([...taskList, newTask])
  }

  const deleteTask = (id: string) => {
    const updatedList = taskList.filter(task => task.id != id  )
    setTaskList(updatedList)
  }
  return (
    <>
    <TaskForm onAdd={addNewTask} />
    <TaskList list={taskList} onDelete={deleteTask} />
    </>
  )
}

export default Tasks
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

  const handleUpdateTask = (item: ITask) => {
    const cloneTaskList = [...taskList];

    const index = taskList.findIndex((x: ITask) => x.id == item.id);

    cloneTaskList[index].task = item.task;

    setTaskList(cloneTaskList);
  }

  return (
    <>
    <TaskForm onAdd={addNewTask} />
    <div style={{marginTop: 10}}>
      <TaskList list={taskList} onDelete={deleteTask} onUpdate={handleUpdateTask} />
    </div>
    </>
  )
}

export default Tasks
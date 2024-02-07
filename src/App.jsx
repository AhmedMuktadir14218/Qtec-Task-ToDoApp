import { useState } from "react";
import TaskForm from "./Component/TaskForm"

function App() {
  
  const [tasks, setTasks] = useState([]);

  const AddTask = task => {
    setTasks([...tasks, task]);}
  return (
    <>
      <TaskForm AddTask={AddTask}></TaskForm>
    </>
  )
}

export default App

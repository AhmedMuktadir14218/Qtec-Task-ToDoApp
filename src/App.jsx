import { useState } from "react";
import TaskForm from "./Component/TaskForm"
import TaskList from "./Component/TaskList";

function App() {
  
  const [tasks, setTasks] = useState([]);

  const AddTask = task => {
    setTasks([...tasks, task]);}
  return (
    <>
      <TaskForm AddTask={AddTask}></TaskForm>
      <TaskList tasks={tasks}
      setTasks={setTasks}
      ></TaskList>
    </>
  )
}

export default App

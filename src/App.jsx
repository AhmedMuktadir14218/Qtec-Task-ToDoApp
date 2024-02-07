import { useState } from "react";
import TaskForm from "./Component/TaskForm"
import TaskList from "./Component/TaskList";
import TaskCounter from "./Component/TaskCounter";

function App() {
  
  const [tasks, setTasks] = useState([]);

  const AddTask = task => {
    setTasks([...tasks, task]);}

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
  
  return (
    <>
    <div className="container mx-auto mt-8 p-4">
       <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TaskCounter totalTasks={totalTasks} completedTasks={completedTasks} />
      <TaskForm AddTask={AddTask}></TaskForm>
      <TaskList tasks={tasks}
      setTasks={setTasks}
      ></TaskList>
    </div>
   
    </>
  )
}

export default App

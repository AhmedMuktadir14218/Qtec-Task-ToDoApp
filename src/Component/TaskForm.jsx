import  { useState } from 'react'

export default function TaskForm({AddTask}) {
    
    
    const [taskName, setTaskName] = useState('');
    const [priority, setPriority] = useState('low');
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!taskName.trim()) return;
      const newTask = {
        id: Date.now(),
        name: taskName,
        completed: false,
        priority: priority
      };
    //   console.log(newTask)
      AddTask(newTask);

      setTaskName('');
      setPriority('low');
    };
    // console.log(tasks)
  return (
    <div>
        <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 mr-2 w-1/2"
          placeholder="Enter task name"
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
        />
        <select
          className="border border-gray-300 rounded-md px-4 py-2 mr-2"
          
          onChange={e => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add Task
        </button>
      </div>
    </form>
    </div>
  )
}

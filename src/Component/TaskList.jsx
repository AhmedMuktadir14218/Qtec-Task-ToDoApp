import Task from './Task';

function TaskList({ tasks,setTasks }) {
    const deleteTask = id => {
        setTasks(tasks.filter(task => task.id !== id));
      };
    
      const toggleTaskStatus = id => {
        setTasks(
          tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
          )
        );
      };
      const editTask = (id, newName) => {
        setTasks(
          tasks.map(task =>
            task.id === id ? { ...task, name: newName } : task
          )
        );
      };

 
  return (
    <ul className="list-none p-0">
      {tasks.map(task => (
        <>
        {/* <li className={`border-b border-gray-300 p-4 flex justify-between items-center ${task.completed ? 'text-gray-400' : ''}`}>
      <span
      onClick={toggleTaskStatus}
        
        style={{ cursor: 'pointer', textDecoration: task.completed ? 'line-through' : 'none' }}
      >
        {task.name}
      </span>
      <div className="flex items-center">
      {!isEditing ? (
          <button className="text-blue-500 mr-4" onClick={() => setIsEditing(true)}>Edit</button>
        ) : (
          <button className="text-green-500 mr-4" onClick={handleEdit}>Save</button>
        )}
        <span
          className={`px-2 py-1 rounded-md text-sm ${task.priority === 'low' ? 'bg-green-500 text-white' : task.priority === 'medium' ? 'bg-yellow-500 text-gray-800' : 'bg-red-500 text-white'}`}
        >
          {task.priority}
        </span>
        <button className="text-red-500 ml-4" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li> */}
     <Task
          key={task.id}
          task={task}
          onDelete={() => deleteTask(task.id)}
          onToggleStatus={() => toggleTaskStatus(task.id)}
          onEdit={editTask}
        />

        </>
      ))}
    </ul>
  );
}

export default TaskList;

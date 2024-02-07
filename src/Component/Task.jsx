import React from 'react';
import { useState } from 'react';

function Task({ task, onDelete, onToggleStatus, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTaskName, setUpdatedTaskName] = useState(task.name);

  const handleEdit = () => {
    onEdit(task.id, updatedTaskName);
    setIsEditing(false);
  };

  return (
    <li className={`border-b border-gray-300 p-4 flex justify-between items-center ${task.completed ? 'text-gray-400' : ''}`}>
      {!isEditing ? (
        <span
          onClick={onToggleStatus}
          style={{ cursor: 'pointer', textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          {task.name}
        </span>
      ) : (
        <input
          type="text"
          value={updatedTaskName}
          onChange={(e) => setUpdatedTaskName(e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1"
        />
      )}
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
        <button className="text-red-500 ml-4" onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
}

export default Task;

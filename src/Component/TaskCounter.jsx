import React from 'react';

function TaskCounter({ totalTasks, completedTasks }) {
  return (
    <div className="flex justify-between mt-4">
      <div>Total Tasks: {totalTasks}</div>
      <div>Completed Tasks: {completedTasks}</div>
    </div>
  );
}

export default TaskCounter;


import React from 'react';

function TaskItem({ task, onToggle, onDelete }) {
  const { id, title, description, completed, dueDate } = task;

  return (
    <li className={`task-item ${completed ? 'completed' : ''}`}>
      <div className="task-info">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        {dueDate && <p className="due-date">Due: {dueDate}</p>}
      </div>
      <div className="task-actions">
        <button onClick={() => onToggle(id)}>
          {completed ? 'Undo' : 'Complete'}
        </button>
        <button className="delete" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;

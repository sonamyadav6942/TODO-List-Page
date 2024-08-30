import React from "react";
import "./TaskColumn.css";

const TaskColumn = ({ title, tasks, status, onDragStart, onDrop }) => {
  const handleDragOver = (e) => {
    e.preventDefault(); 
  };

  return (
    <section
      className="task-column"
      onDragOver={handleDragOver}
      onDrop={() => onDrop(status)}
    >
      <h2>{title}</h2>
      <div className="tasks-list">
        {tasks
          .filter((task) => task.status === status)
          .map((task) => (
            <div
              key={task.task}
              className="task-item"
              draggable
              onDragStart={() => onDragStart(task)}
            >
              {task.task}
            </div>
          ))}
      </div>
    </section>
  );
};

export default TaskColumn;

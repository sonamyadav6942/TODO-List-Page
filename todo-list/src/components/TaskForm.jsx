import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "do", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
  };

  return (
    <header className="app-header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <select name="status" onChange={handleChange}>
          <option value="do">Do</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </header>
  );
};

export default TaskForm;

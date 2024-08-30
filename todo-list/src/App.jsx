import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [draggedTask, setDraggedTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDragStart = (task) => {
    setDraggedTask(task);
  };

  const handleDrop = (status) => {
    if (draggedTask) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.task === draggedTask.task ? { ...task, status } : task
        )
      );
    }
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app-main">
        <TaskColumn
          title="Do"
          tasks={tasks}
          status="do"
          onDragStart={handleDragStart}
          onDrop={handleDrop}
        />
        <TaskColumn
          title="Doing"
          tasks={tasks}
          status="doing"
          onDragStart={handleDragStart}
          onDrop={handleDrop}
        />
        <TaskColumn
          title="Done"
          tasks={tasks}
          status="done"
          onDragStart={handleDragStart}
          onDrop={handleDrop}
        />
      </main>
    </div>
  );
};

export default App;

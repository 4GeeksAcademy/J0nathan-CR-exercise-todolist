import React, { useState } from "react";

const Home = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    if (e.key === "Enter" && task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">ToDo List</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <input
            type="text"
            className="form-control"
            placeholder="Escribe una tarea y presiona Enter"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleAddTask}
          />
        </li>
        {tasks.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item}
            <button
              className="btn btn-danger btn-sm delete-btn"
              onClick={() => handleDeleteTask(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <div className="footer mt-2">
        <small>{tasks.length} tareas pendientes</small>
      </div>
    </div>
  );
};

export default Home;

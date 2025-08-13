import React, { useEffect, useState } from "react";
import axios from "axios";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // ✅ Use relative path so it works in production and locally
    axios.get("/api/tasks")
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>📋 Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

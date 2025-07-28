import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title.trim()) return;

    if (editingId) {
      await axios.put(`http://localhost:5000/api/tasks/${editingId}`, { title });
      setEditingId(null);
    } else {
      await axios.post("http://localhost:5000/api/tasks", { title });
    }

    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  const editTask = (task) => {
    setTitle(task.title);
    setEditingId(task._id);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <h1>📝 MERN To-Do App</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Enter task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTask}>{editingId ? "Update" : "Add"}</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title}
            <button onClick={() => editTask(task)}>✏️</button>
            <button onClick={() => deleteTask(task._id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

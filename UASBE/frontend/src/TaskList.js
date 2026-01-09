import { useEffect, useState, useCallback } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem("token");

  const loadTasks = useCallback(async () => {
    const res = await fetch("http://localhost:5000/api/tasks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setTasks(await res.json());
  }, [token]);

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <div className="card">
      <h3>Daftar Tugas</h3>

      {tasks.map((t) => (
        <div className="task" key={t.id}>
          <span>{t.title}</span>
          <button onClick={() => deleteTask(t.id)}>Hapus</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;

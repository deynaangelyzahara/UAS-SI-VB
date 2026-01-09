import { useState } from "react";

function TaskForm() {
  const [title, setTitle] = useState("");
  const token = localStorage.getItem("token");

  const submit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title }),
    });

    setTitle("");
    alert("Tugas berhasil ditambahkan");
  };

  return (
    <div className="card">
      <h3>Input Tugas</h3>

      <form onSubmit={submit}>
        <input placeholder="Nama tugas" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}

export default TaskForm;

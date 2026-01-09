import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import InputTugas from "./pages/InputTugas";
import SemuaTugas from "./pages/SemuaTugas";
import Login from "./pages/Login";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("token"));
  const [page, setPage] = useState("input");
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  if (!isLogin) {
    return <Login setIsLogin={setIsLogin} />;
  }

  return (
    <div className="app-container">
      <Sidebar setPage={setPage} setIsLogin={setIsLogin} />
      <div className="content">
        {page === "input" && <InputTugas addTask={addTask} />}
        {page === "list" && <SemuaTugas tasks={tasks} deleteTask={deleteTask} editTask={editTask} />}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import Sidebar from "./Sidebar";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function Dashboard() {
  const [page, setPage] = useState("input");

  return (
    <div className="layout">
      <Sidebar setPage={setPage} />

      <div className="content">
        <div className="topbar">
          <h2>Dashboard Mahasiswa</h2>
          <button
            className="logout"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            Logout
          </button>
        </div>

        {page === "input" && <TaskForm />}
        {page === "list" && <TaskList />}
      </div>
    </div>
  );
}

export default Dashboard;

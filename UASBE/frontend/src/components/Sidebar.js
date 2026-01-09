import React from "react";

function Sidebar({ setPage, setIsLogin }) {
  const logout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
  };

  return (
    <div className="sidebar">
      <h2>My List</h2>

      <button onClick={() => setPage("input")}>Input Tugas</button>

      <button onClick={() => setPage("list")}>Semua Tugas</button>

      <button className="logout" onClick={logout}>
        Log Out
      </button>
    </div>
  );
}

export default Sidebar;

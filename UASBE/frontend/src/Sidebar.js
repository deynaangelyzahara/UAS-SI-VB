function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h3>📚 Tugas</h3>

      <button onClick={() => setPage("input")}>Input Tugas</button>

      <button onClick={() => setPage("list")}>Semua Tugas</button>
    </div>
  );
}

export default Sidebar;

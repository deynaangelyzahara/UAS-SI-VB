import React, { useState } from "react";

function InputTugas({ addTask }) {
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({
      nama,
      deskripsi,
      deadline,
    });

    setNama("");
    setDeskripsi("");
    setDeadline("");
  };

  return (
    <>
      <h2>Halaman Input Tugas</h2>

      <div className="card">
        <h3>Input Tugas</h3>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nama mata kuliah" value={nama} onChange={(e) => setNama(e.target.value)} required />

          <textarea placeholder="Deskripsi tugas" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} required />

          <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />

          <button type="submit" className="btn-primary">
            Simpan
          </button>
        </form>
      </div>
    </>
  );
}

export default InputTugas;

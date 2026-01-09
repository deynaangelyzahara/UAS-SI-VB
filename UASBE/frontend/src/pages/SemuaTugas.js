import React, { useState } from "react";

function SemuaTugas({ tasks, deleteTask, editTask }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  const startEdit = (index, task) => {
    setEditIndex(index);
    setEditData(task);
  };

  const saveEdit = () => {
    editTask(editIndex, editData);
    setEditIndex(null);
  };

  return (
    <>
      <h2>Halaman – Input Tugas</h2>

      <div className="card large">
        <h3>Semua Tugas</h3>

        <table>
          <thead>
            <tr>
              <th>Nama tugas</th>
              <th>Deskripsi</th>
              <th>Deadline</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{editIndex === index ? <input value={editData.nama} onChange={(e) => setEditData({ ...editData, nama: e.target.value })} /> : task.nama}</td>

                <td>
                  {editIndex === index ? (
                    <input
                      value={editData.deskripsi}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          deskripsi: e.target.value,
                        })
                      }
                    />
                  ) : (
                    task.deskripsi
                  )}
                </td>

                <td>
                  {editIndex === index ? (
                    <input
                      type="date"
                      value={editData.deadline}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          deadline: e.target.value,
                        })
                      }
                    />
                  ) : (
                    task.deadline
                  )}
                </td>

                <td>
                  {editIndex === index ? (
                    <button className="btn-green" onClick={saveEdit}>
                      Simpan
                    </button>
                  ) : (
                    <button className="btn-green" onClick={() => startEdit(index, task)}>
                      Edit
                    </button>
                  )}

                  <button className="btn-red" onClick={() => deleteTask(index)}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SemuaTugas;

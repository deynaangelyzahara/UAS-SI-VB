const express = require('express');
const cors = require('cors');
require('dotenv').config();

// 1. Import Routes (Menghubungkan ke jalur yang dipisah)
const authRoutes = require('./routes/authRoutes');
const transaksiRoutes = require('./routes/transaksiRoutes');

const app = express();

// 2. Middleware Utama
app.use(cors({
  origin: ["https://uas-si-vb-83km.vercel.app", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json()); 

// 3. Daftar Endpoint API 
// Login dan Register 
app.use('/api/auth', authRoutes); 
// CRUD Transaksi 
app.use('/api/transaksi', transaksiRoutes); 

// 4. Cek Status Server 
app.get('/', (req, res) => {
    res.json({
        message: "Aplikasi Keuangan Pribadi Aktif!",
        status: "Ready"
    });
});

// 5. Konfigurasi Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`==========================================`);
    console.log(`Server Berhasil Dijalankan!`);
    console.log(`URL Backend: http://localhost:${PORT}`);
    console.log(`==========================================`);
});
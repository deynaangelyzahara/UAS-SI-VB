NAMA ANGGOTA KELOMPOK:

RIAN RIANTO, 230660221004
PAIZAL RIZKI NUGRAHA, 230660221012
MUHAMMAD PANJI ADHITYA, 230660221012

Deskripsi Aplikasi:
Aplikasi Pengelolaan Tugas Mahasiswa
Aplikasi Pengelolaan Tugas Mahasiswa merupakan sebuah aplikasi berbasis web yang dirancang untuk membantu mahasiswa dalam mencatat, mengelola, dan memantau tugas perkuliahan secara terstruktur dan terorganisir. Aplikasi ini memungkinkan setiap mahasiswa untuk memiliki akun pribadi sehingga data tugas yang dikelola bersifat aman dan hanya dapat diakses oleh pemiliknya.
Aplikasi ini dibangun dengan arsitektur client–server, di mana backend menyediakan RESTful API yang dapat dikonsumsi oleh frontend web. Sistem ini menerapkan autentikasi berbasis JSON Web Token (JWT) untuk memastikan keamanan akses serta menerapkan konsep ownership data, sehingga setiap mahasiswa hanya dapat mengelola tugas miliknya sendiri.

Cara Setup & Menjalankan:
Pastikan Node.js, npm, XAMPP (MySQL), dan Postman sudah terinstal. Aktifkan MySQL melalui XAMPP lalu buat database bernama tugas_mahasiswa. Masuk ke folder backend, jalankan npm install, buat file .env berisi konfigurasi database dan JWT, kemudian jalankan migrasi dengan npx prisma migrate dev dan start server menggunakan npm run dev. Backend akan berjalan di http://localhost:5000.

Selanjutnya masuk ke folder frontend, jalankan npm install lalu npm start. Aplikasi frontend dapat diakses melalui browser di http://localhost:3000. Pengguna dapat login, menginput tugas, melihat, mengedit, menghapus tugas, dan logout melalui dashboard aplikasi.

Endpoint Penting:

API Endpoint
Auth

POST /api/auth/register
Registrasi user baru
POST /api/auth/login
Login user dan mendapatkan token JWT
GET /api/users/profile
Mendapatkan data user yang sedang login

Task (Tugas Mahasiswa)
Semua endpoint di bawah memerlukan token JWT

POST /api/tasks
Menambahkan tugas baru
GET /api/tasks
Mengambil semua tugas milik user
GET /api/tasks/:id
Mengambil detail satu tugas
PUT /api/tasks/:id
Mengedit tugas milik user
DELETE /api/tasks/:id
Menghapus tugas milik user

Link tampilan UI APK dan ERD:
https://drive.google.com/drive/folders/16R4Z5085x4mPGn4H8NtC6WcNmLOOp6ws?usp=sharing

Link web netlify:
https://tugasmahasiswa1.netlify.app/

Email dan Password akses login:

1. Email : paizal@gmail.com PW : 123456
2. Email : rian@gmail.com PW : 1234
3. Email : panji@gmail.com PW : 12345

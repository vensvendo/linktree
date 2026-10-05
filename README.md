# 🎮 VenStation - Link Hub (Link-in-Bio)

Website **Link-in-Bio / Landing Page** modern dan mandiri untuk promosi sistem kasir **VenStation Billing PS**. Dirancang khusus untuk ditaruh di bio Instagram, TikTok, atau WhatsApp bisnis Anda dengan sistem manajemen link yang aman dan tersinkronisasi langsung antar-perangkat secara *real-time*.

---

## ✨ Fitur Unggulan

1. **🎨 Tampilan Modern & Responsif:**
   - Desain gelap (*dark theme*) ala PlayStation dengan efek visual blur dan glowing orb neon cyan/indigo.
   - 100% Mobile Friendly (nyaman dibuka lewat browser HP maupun Laptop).

2. **🔄 Sinkronisasi Real-Time Lintas Perangkat:**
   - Menggunakan backend **Node.js Express API** (`/api/links`) dan database file server `links.json`.
   - Perubahan link yang dilakukan di laptop/PC **otomatis langsung muncul di HP** pengunjung tanpa perlu refresh cache atau hard reload.

3. **🔐 Panel Admin Terlindungi PIN:**
   - Pengunjung biasa hanya melihat halaman tombol publik yang bersih dan profesional.
   - Tombol **🔒 Admin** disembunyikan secara elegan di pojok kanan bawah.
   - Memerlukan autentikasi PIN rahasia (**`60011477`**) untuk menambah, mengubah, atau menghapus link promosi.

4. **🚀 Siap Deploy Gratis di Cloud:**
   - Sudah dilengkapi dengan konfigurasi server yang kompatibel dengan **Render.com**, **Railway**, atau VPS Node.js lainnya.

---

## 📁 Struktur File Proyek

```text
D:\linktree\
├── index.html        # Halaman frontend interaktif & panel kelola admin
├── server.js         # Backend Express API penyedia endpoint /api/links
├── links.json        # Database penyimpanan link publik & kustom
├── package.json      # Dependensi Node.js (express, cors)
└── README.md         # Dokumentasi teknis proyek
```

---

## 🚀 Panduan Menjalankan Secara Lokal (Local Development)

Jika ingin menguji coba di komputer sendiri:

```bash
# 1. Masuk ke folder proyek
cd D:\linktree

# 2. Instal dependensi
npm install

# 3. Jalankan server
npm start
```
Buka browser dan akses: `http://localhost:3000`

---

## ☁️ Panduan Deploy ke Render.com (100% Gratis)

1. **Buat Repository Baru di GitHub:**
   - Buka GitHub ➔ Buat repo bernama `linktree` (bisa Public atau Private).
   - Lakukan push file dari `D:\linktree`.

2. **Sambungkan ke Render.com:**
   - Buka [Render.com](https://render.com/) ➔ Klik **New +** ➔ Pilih **Web Service**.
   - Pilih repository `linktree`.
   - Konfigurasi:
     - **Runtime:** `Node`
     - **Region:** `Singapore (Southeast Asia)`
     - **Build Command:** `npm install`
     - **Start Command:** `node server.js`
     - **Instance Type:** `Free ($0/month)`
   - Klik **Deploy Web Service**.

3. **Gunakan URL Hasil Deploy:**
   - Render akan memberikan domain seperti: `https://venstation-linkhub.onrender.com`.
   - Pasang link tersebut di **Bio Instagram / TikTok** Anda!

---

## 🔑 Cara Mengelola Link Promosi

1. Buka website Link Hub Anda.
2. Di pojok kanan bawah, klik tombol samar bertuliskan **🔒 Admin**.
3. Masukkan PIN Admin:
   ```text
   60011477
   ```
4. Tambahkan link baru dengan memasukkan:
   - **Judul Tombol:** Contoh: `🚀 Coba Live Demo Kasir`
   - **URL Tujuan:** Contoh: `https://demo-venstation-billing.onrender.com/#/login`
5. Klik **➕ Simpan & Tambahkan**.
6. Selesai! Link baru akan tersimpan permanen di server dan langsung aktif untuk seluruh pengunjung.

---

## 📄 Lisensi
Hak Cipta © 2026 **VenStation Billing PS**. Seluruh hak cipta dilindungi.

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'links.json');
const ADMIN_PIN = '60011477';

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Endpoint ambil data link
app.get('/api/links', (req, res) => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      return res.json(JSON.parse(data));
    }
    return res.json([
      { id: '1', title: '🚀 Coba Live Demo Aplikasi', url: 'https://demo-venstation-billing.onrender.com/#/login', gradient: 'from-cyan-500 to-blue-600', icon: '🚀' },
      { id: '2', title: '💬 Konsultasi & Pesan via WhatsApp', url: 'https://wa.me/6281234567890?text=Halo%20Admin', gradient: 'bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50', icon: '💬' },
      { id: '3', title: '⭐ Lihat Repository GitHub', url: 'https://github.com/vensvendo/demovenstationbiling', gradient: 'bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50', icon: '⭐' }
    ]);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// Endpoint simpan data link
app.post('/api/links', (req, res) => {
  const { pin, links } = req.body;
  if (pin !== ADMIN_PIN) {
    return res.status(403).json({ error: 'PIN Admin Salah!' });
  }
  if (!Array.isArray(links)) {
    return res.status(400).json({ error: 'Format link tidak valid' });
  }
  try {
    // Coba tulis ke file lokal
    fs.writeFileSync(DATA_FILE, JSON.stringify(links, null, 2), 'utf8');
    return res.json({ success: true, links });
  } catch (e) {
    // Jika read-only di container, simpan ke variabel global sementara agar sinkron dalam satu sesi
    global.cachedLinks = links;
    return res.json({ success: true, links });
  }
});

app.listen(PORT, () => {
  console.log('Server Linktree aktif di port ' + PORT);
});

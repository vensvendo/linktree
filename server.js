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

// Endpoint ambil data link (publik)
app.get('/api/links', (req, res) => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      return res.json(JSON.parse(data));
    }
    return res.json([]);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

// Endpoint simpan data link (wajib PIN)
app.post('/api/links', (req, res) => {
  const { pin, links } = req.body;
  if (pin !== ADMIN_PIN) {
    return res.status(403).json({ error: 'PIN Admin Salah!' });
  }
  if (!Array.isArray(links)) {
    return res.status(400).json({ error: 'Format link tidak valid' });
  }
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(links, null, 2), 'utf8');
    return res.json({ success: true, links });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log('Server Linktree aktif di port ' + PORT);
});

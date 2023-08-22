const express = require('express');
const app = express();
const port = 3000;

const cache = {};

function checkCache(req, res, next) {
  const key = req.originalUrl || req.url;
  if (cache[key]) {
    console.log('Data ditemukan di cache.');
    res.send(cache[key]);
  } else {
    next();
  }
}

function saveToCache(req, data) {
  const key = req.originalUrl || req.url;
  cache[key] = data;
}

app.get('/', checkCache, (req, res) => {
  const data = 'Ini adalah data dari server.';
  saveToCache(req, data);
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

const express = require('express');
const app = express();
const PORT = 4001;

app.use(express.json());

app.get('/auth', (req, res) => {
  res.send('Auth Service');
});

app.listen(PORT, () => {
  console.log(`Auth Service is running on http://localhost:${PORT}`);
});

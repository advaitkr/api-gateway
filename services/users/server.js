const express = require('express');
const app = express();
const PORT = 4002;

app.use(express.json());

app.get('/users', (req, res) => {
  res.send('Users Service');
});

app.listen(PORT, () => {
  console.log(`Users Service is running on http://localhost:${PORT}`);
});

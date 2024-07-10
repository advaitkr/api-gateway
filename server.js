const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const gatewayRoutes = require('./routes/gatewayRoutes');

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/', gatewayRoutes);

app.get('/', (req, res) => {
  res.send('API Gateway is running');
});

app.listen(PORT, () => {
  console.log(`API Gateway is running on http://localhost:${PORT}`);
});


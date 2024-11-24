const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const taskRoutes = require('./routes');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('Task Management API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

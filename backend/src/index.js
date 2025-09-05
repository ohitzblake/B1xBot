const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const generateRoute = require('./routes/generate');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/generate', generateRoute);

app.get('/', (req, res) => {
  res.send('BlxAi Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

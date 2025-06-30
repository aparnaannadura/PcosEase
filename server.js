
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

mongoose
  .connect('mongodb://localhost:27017/admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('✅ MongoDB Connected (admin DB)'))
  .catch((err) => console.error('❌ DB Connection Failed:', err));


app.use(cors());
app.use(express.json());

const dietLogs = [];
const symptomLogs = [];

app.post('/api/diet', (req, res) => {
  const { food, nutrient, suggestion } = req.body;
  if (!food || !nutrient || !suggestion) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  dietLogs.push({ food, nutrient, suggestion });
  res.status(201).json({ message: 'Diet saved successfully' });
});

app.get('/api/diet', (req, res) => {
  res.json(dietLogs);
});

app.post('/api/symptoms', (req, res) => {
  const { emoji, label } = req.body;
  if (!emoji || !label) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  symptomLogs.push({ emoji, label, time: new Date().toISOString() });
  res.status(201).json({ message: 'Symptom logged successfully' });
});

app.get('/api/symptoms', (req, res) => {
  res.json(symptomLogs);
});
e
app.get('/', (req, res) => {
  res.send('🌸 PCOS Express Server Running');
});

app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// ✅ MongoDB Connect to `admin` DB
mongoose.connect('mongodb://localhost:27017/admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected (admin DB)'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

// ✅ Schema (no external file, directly here)
const profileSymptomSchema = new mongoose.Schema({
  user: String,
  symptom: String,
  time: String,
}, { timestamps: true });

const ProfileSymptom = mongoose.model('ProfileSymptom', profileSymptomSchema);

// ✅ POST route for saving symptom
app.post('/api/profilesymptom', async (req, res) => {
  const { user, symptom, time } = req.body;
  if (!user || !symptom || !time) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    await new ProfileSymptom({ user, symptom, time }).save();
    res.status(201).json({ message: 'Symptom saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ GET route to fetch symptom logs
app.get('/api/profilesymptom', async (req, res) => {
  try {
    const logs = await ProfileSymptom.find().sort({ createdAt: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch' });
  }
});
// Diet Schema + route
const dietSchema = new mongoose.Schema({
  user: String,
  food: String,
  nutrient: String,
  suggestion: String,
  time: String
});
const Diet = mongoose.model('Diet', dietSchema);

app.post('/api/diet', async (req, res) => {
  const { user, food, nutrient, suggestion, time } = req.body;
  if (!user || !food || !nutrient || !suggestion || !time)
    return res.status(400).json({ error: 'Missing fields' });

  await new Diet({ user, food, nutrient, suggestion, time }).save();
  res.status(201).json({ message: 'Diet saved successfully' });
});

// Exercise Schema + route
const exerciseSchema = new mongoose.Schema({
  user: String,
  name: String,
  type: String,
  detail: String,
  time: String
});
const Exercise = mongoose.model('Exercise', exerciseSchema);

app.post('/api/exercise', async (req, res) => {
  const { user, name, type, detail, time } = req.body;
  if (!user || !name || !type || !detail || !time)
    return res.status(400).json({ error: 'Missing fields' });

  await new Exercise({ user, name, type, detail, time }).save();
  res.status(201).json({ message: 'Exercise saved successfully' });
});


// ✅ Test route (optional)
app.get('/', (req, res) => {
  res.send('🌸 ProfileSymptom Server Running...');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

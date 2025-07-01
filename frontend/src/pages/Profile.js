import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const [symptom, setSymptom] = useState('');
  const [diet, setDiet] = useState({ food: '', nutrient: '', suggestion: '' });
  const [exercise, setExercise] = useState({ name: '', type: '', detail: '' });

  const [logs, setLogs] = useState([]);
  const [todayLogged, setTodayLogged] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkTodayLogged = (entries) => {
    const today = new Date().toISOString().split('T')[0];
    return entries.some((log) => log.time.startsWith(today));
  };

  const loadLogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/profilesymptom');
      const userLogs = res.data.filter((log) => log.user === name);
      setLogs(userLogs.reverse());
      setTodayLogged(checkTodayLogged(userLogs));
    } catch (err) {
      console.error('Failed to fetch logs:', err);
    }
    setLoading(false);
  };

  const handleLogin = () => {
    if (!name || !password) return alert('Please fill all fields');
    setLoggedIn(true);
    localStorage.setItem('pcos_user', name);
    loadLogs();
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('pcos_user');
    if (storedUser) {
      setName(storedUser);
      setLoggedIn(true);
      loadLogs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Submit symptom
  const handleLogSymptom = async () => {
    if (!symptom) return;
    try {
      await axios.post('http://localhost:5000/api/profilesymptom', {
        user: name,
        symptom,
        time: new Date().toISOString(),
      });
      await loadLogs();
      setSymptom('');
      setTodayLogged(true);
    } catch (err) {
      console.error('Failed to save symptom:', err);
    }
  };

  // Submit diet
  const handleLogDiet = async () => {
    const { food, nutrient, suggestion } = diet;
    if (!food || !nutrient || !suggestion) return;
    try {
      await axios.post('http://localhost:5000/api/diet', {
        user: name,
        food,
        nutrient,
        suggestion,
        time: new Date().toISOString(),
      });
      alert('✅ Diet saved!');
      setDiet({ food: '', nutrient: '', suggestion: '' });
    } catch (err) {
      console.error('Failed to save diet:', err);
    }
  };

  // Submit exercise
  const handleLogExercise = async () => {
    const { name: exName, type, detail } = exercise;
    if (!exName || !type || !detail) return;
    try {
      await axios.post('http://localhost:5000/api/exercise', {
        user: name,
        name: exName,
        type,
        detail,
        time: new Date().toISOString(),
      });
      alert('✅ Exercise saved!');
      setExercise({ name: '', type: '', detail: '' });
    } catch (err) {
      console.error('Failed to save exercise:', err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow mt-10">
      {!loggedIn ? (
        <>
          <h2 className="text-2xl font-bold text-pink-700 mb-4">Login to Your Profile</h2>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-3 px-4 py-2 border border-pink-300 rounded"
          />
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-2 border border-pink-300 rounded"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
          >
            Login
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl text-pink-700 font-semibold mb-6">
            Welcome, <span className="text-pink-600">{name}</span> 💖
          </h2>

          {/* Symptom Section */}
          {!todayLogged && (
            <div className="bg-pink-50 border border-pink-200 p-4 rounded-lg mb-6 shadow">
              <h3 className="text-lg font-semibold text-pink-700 mb-2">Day 1 — Log Today's Symptom 🌸</h3>
              <input
                type="text"
                placeholder="How are you feeling today?"
                value={symptom}
                onChange={(e) => setSymptom(e.target.value)}
                className="w-full mb-2 px-4 py-2 border border-pink-300 rounded"
              />
              <button
                onClick={handleLogSymptom}
                className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
              >
                Save Today's Symptom
              </button>
            </div>
          )}

          {/* Diet Section */}
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6 shadow">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Log Your Diet 🍎</h3>
            <input
              type="text"
              placeholder="Food name"
              value={diet.food}
              onChange={(e) => setDiet({ ...diet, food: e.target.value })}
              className="w-full mb-2 px-4 py-2 border border-green-300 rounded"
            />
            <input
              type="text"
              placeholder="Nutrients"
              value={diet.nutrient}
              onChange={(e) => setDiet({ ...diet, nutrient: e.target.value })}
              className="w-full mb-2 px-4 py-2 border border-green-300 rounded"
            />
            <input
              type="text"
              placeholder="Suggestion"
              value={diet.suggestion}
              onChange={(e) => setDiet({ ...diet, suggestion: e.target.value })}
              className="w-full mb-3 px-4 py-2 border border-green-300 rounded"
            />
            <button
              onClick={handleLogDiet}
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Save Diet
            </button>
          </div>

          {/* Exercise Section */}
          <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg mb-6 shadow">
            <h3 className="text-lg font-semibold text-purple-700 mb-2">Log Your Exercise 💪</h3>
            <input
              type="text"
              placeholder="Exercise name"
              value={exercise.name}
              onChange={(e) => setExercise({ ...exercise, name: e.target.value })}
              className="w-full mb-2 px-4 py-2 border border-purple-300 rounded"
            />
            <input
              type="text"
              placeholder="Type (light/heavy)"
              value={exercise.type}
              onChange={(e) => setExercise({ ...exercise, type: e.target.value })}
              className="w-full mb-2 px-4 py-2 border border-purple-300 rounded"
            />
            <input
              type="text"
              placeholder="Detail"
              value={exercise.detail}
              onChange={(e) => setExercise({ ...exercise, detail: e.target.value })}
              className="w-full mb-3 px-4 py-2 border border-purple-300 rounded"
            />
            <button
              onClick={handleLogExercise}
              className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600"
            >
              Save Exercise
            </button>
          </div>

          {/* Weekly Symptom Log */}
          <div>
            <h3 className="text-lg font-bold text-pink-700 mb-2">Your Weekly Symptom Log 📅</h3>
            {loading ? (
              <p className="text-gray-400">Loading your logs...</p>
            ) : logs.length === 0 ? (
              <p className="text-gray-500">No symptoms logged yet.</p>
            ) : (
              <ul className="text-sm space-y-2 max-h-64 overflow-y-auto">
                {logs.slice(0, 7).map((log, idx) => (
                  <li
                    key={idx}
                    className="bg-pink-50 border border-pink-200 rounded px-4 py-2 text-left"
                  >
                    <strong>{new Date(log.time).toLocaleDateString()}</strong>: {log.symptom}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;

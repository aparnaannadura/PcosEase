import React, { useState } from 'react';
import {
  FaSmile, FaMeh, FaTired, FaHeartbeat, FaBomb, FaAngry,
  FaSadTear, FaHeadSideVirus, FaCloudRain, FaFire, FaWineGlass,
  FaBed, FaGrinStars, FaIceCream, FaSpa, FaHotjar, FaPoo,
  FaSurprise, FaLemon, FaAppleAlt
} from 'react-icons/fa';

const symptomData = [
  { icon: <FaSmile />, label: 'Energetic', type: 'earlier', message: 'You’re feeling fresh and active today. Keep up the positivity!' },
  { icon: <FaMeh />, label: 'Neutral', type: 'earlier', message: 'Balanced state. Maintain hydration and light meals.' },
  { icon: <FaTired />, label: 'Fatigue', type: 'middle', message: 'Low energy? Try stretching or short mindful breaks.' },
  { icon: <FaHeartbeat />, label: 'Cramps', type: 'middle', message: 'Cramps detected! Stay hydrated and use a warm compress.' },
  { icon: <FaBomb />, label: 'Bloating', type: 'middle', message: 'Feeling bloated? Avoid salty snacks and drink herbal tea.' },
  { icon: <FaAngry />, label: 'Irritable', type: 'cautious', message: 'Mood off? Deep breathing or light walking can help.' },
  { icon: <FaSadTear />, label: 'Mood Swings', type: 'cautious', message: 'It’s okay to feel up and down. Journaling might help.' },
  { icon: <FaHeadSideVirus />, label: 'Headache', type: 'cautious', message: 'Take rest and reduce screen time. Hydrate well.' },
  { icon: <FaCloudRain />, label: 'Low Motivation', type: 'middle', message: 'Start small today. Even 5 minutes of activity helps!' },
  { icon: <FaFire />, label: 'Hot Flashes', type: 'cautious', message: 'Keep cool and sip on cold water or mint-infused drinks.' },
  { icon: <FaWineGlass />, label: 'Cravings', type: 'middle', message: 'Craving alert! Opt for healthy sweets or fruits.' },
  { icon: <FaBed />, label: 'Sleepy', type: 'middle', message: 'Sneak in a 15-min power nap if possible!' },
  { icon: <FaGrinStars />, label: 'Confident', type: 'earlier', message: 'You’re shining today! Great energy to ride on!' },
  { icon: <FaIceCream />, label: 'Snacky', type: 'middle', message: 'Plan your snacks ahead to avoid impulsive bites.' },
  { icon: <FaSpa />, label: 'Relaxed', type: 'earlier', message: 'Perfect vibe. Continue with calming routines.' },
  { icon: <FaHotjar />, label: 'Overheating', type: 'middle', message: 'Too warm? Take breaks and avoid spicy foods.' },
  { icon: <FaPoo />, label: 'Constipation', type: 'cautious', message: 'Add fiber and water to your day for smooth flow.' },
  { icon: <FaSurprise />, label: 'Anxious', type: 'cautious', message: 'Breathe slow. One step at a time. You got this.' },
  { icon: <FaLemon />, label: 'Nausea', type: 'cautious', message: 'Try lemon water or ginger to soothe your tummy.' },
  { icon: <FaAppleAlt />, label: 'Healthy', type: 'earlier', message: 'Feeling healthy today? Keep up the great lifestyle!' },
];

function Symptoms() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredSymptoms =
    filter === 'all' ? symptomData : symptomData.filter((s) => s.type === filter);

  return (
    <div className="py-10 px-4 max-w-6xl mx-auto text-center min-h-screen bg-pink-50">
      <h2 className="text-3xl font-bold text-pink-700 mb-6">Track Today's Symptoms 🌡️</h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {['all', 'earlier', 'middle', 'cautious'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm ${
              filter === cat
                ? 'bg-pink-500 text-white'
                : 'bg-white border border-pink-300 text-pink-700 hover:bg-pink-100'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Symptoms Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
        {filteredSymptoms.map((s, i) => (
          <div
            key={i}
            onClick={() => setSelected(s)}
            className={`bg-white p-4 rounded-xl shadow-md cursor-pointer transition-all hover:scale-105 ${
              selected?.label === s.label ? 'border border-pink-500 bg-pink-50' : ''
            }`}
          >
            <div className="text-4xl text-pink-500 mb-2">{s.icon}</div>
            <h3 className="text-md font-semibold text-gray-700">{s.label}</h3>
            <p className="text-xs text-gray-400 capitalize">{s.type}</p>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md relative text-center">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-4 text-gray-500 text-xl font-bold"
            >
              &times;
            </button>
            <div className="text-5xl text-pink-500 mb-2">{selected.icon}</div>
            <h3 className="text-xl font-bold text-pink-700">{selected.label}</h3>
            <p className="text-sm text-gray-600 mt-2">{selected.message}</p>
            <button
              onClick={() => setSelected(null)}
              className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-full text-sm hover:bg-pink-600"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Symptoms;

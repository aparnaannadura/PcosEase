import React, { useState } from 'react';

const symptomData = [
  { emoji: '😄', label: 'Energetic', type: 'earlier' },
  { emoji: '😐', label: 'Neutral', type: 'earlier' },
  { emoji: '😞', label: 'Fatigue', type: 'middle' },
  { emoji: '😖', label: 'Cramps', type: 'middle' },
  { emoji: '😩', label: 'Bloating', type: 'middle' },
  { emoji: '😠', label: 'Irritable', type: 'cautious' },
  { emoji: '😭', label: 'Mood Swings', type: 'cautious' },
  { emoji: '🤯', label: 'Headache', type: 'cautious' },
];

function Symptoms() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredSymptoms = filter === 'all'
    ? symptomData
    : symptomData.filter((s) => s.type === filter);

  return (
    <div className="py-10 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-pink-700 mb-6">Track Today's Symptoms 🌡️</h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {['all', 'earlier', 'middle', 'cautious'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm ${
              filter === cat
                ? 'bg-pink-500 text-white'
                : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Emoji Symptom Boxes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredSymptoms.map((s, index) => (
          <div
            key={index}
            onClick={() => setSelected(s)}
            className={`p-4 rounded-xl cursor-pointer shadow-md transition-all hover:scale-105 ${
              selected?.label === s.label ? 'bg-pink-100 border border-pink-500' : 'bg-white'
            }`}
          >
            <div className="text-4xl mb-2">{s.emoji}</div>
            <p className="font-medium text-gray-700">{s.label}</p>
            <p className="text-xs text-gray-400 capitalize">{s.type}</p>
          </div>
        ))}
      </div>

      {/* Selected Symptom Box */}
      {selected && (
        <div className="mt-8 bg-white rounded-xl p-6 shadow-lg border border-pink-300 max-w-md mx-auto">
          <h3 className="text-xl font-bold text-pink-700 mb-2">{selected.label}</h3>
          <p className="text-4xl">{selected.emoji}</p>
          <p className="text-gray-600 mt-2 text-sm">
            You've selected <span className="font-semibold">{selected.label}</span> as your symptom today.
          </p>
          <button
            onClick={() => setSelected(null)}
            className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-full text-sm hover:bg-pink-600"
          >
            Clear Selection
          </button>
        </div>
      )}
    </div>
  );
}

export default Symptoms;

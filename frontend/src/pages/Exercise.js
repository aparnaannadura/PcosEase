import React, { useState } from 'react';
import exe1 from '../Images/exe1.jpeg';
import exe2 from '../Images/exe2.jpeg';
import exe3 from '../Images/exe3.jpeg';
import exe4 from '../Images/exe4.jpeg';
import exe5 from '../Images/exe5.jpeg';
import exe6 from '../Images/exe6.jpeg';
import exe7 from '../Images/exe7.jpeg';
import exe8 from '../Images/exe8.jpeg';
import exe9 from '../Images/exe9.jpeg';
import exe10 from '../Images/exe10.jpeg';

const allExercises = [
  { name: 'High Knees', image: exe1, type: 'light' },
  { name: 'Skipping', image: exe2, type: 'light' },
  { name: 'Jumping Jacks', image: exe3, type: 'light' },
  { name: 'Bicycles', image: exe4, type: 'light' },
  { name: 'Running', image: exe5, type: 'light' },
  { name: 'Walking Squats', image: exe6, type: 'heavy' },
  { name: 'TreadMill Walk', image: exe7, type: 'heavy' },
  { name: 'Jack Knife Situps', image: exe8, type: 'heavy' },
  { name: 'Leg Lifts', image: exe9, type: 'heavy' },
  { name: 'Plank', image: exe10, type: 'heavy' },
];

const exerciseDetails = [
  "Great cardio warm-up, boosts heart rate and leg strength.",
  "Fun, calorie-burning cardio using a rope or simulation.",
  "Full-body aerobic warm-up, improves flexibility and rhythm.",
  "Works abs and obliques with continuous pedaling motion.",
  "Builds stamina, burns calories fast, improves lung capacity.",
  "Builds glutes and quads, adds dynamic movement to squats.",
  "Low-impact cardio, great for endurance and heart health.",
  "Targets core and lower abs, strengthens belly region.",
  "Lifts lower abs, reduces belly fat and tones legs.",
  "Ultimate core hold, improves strength and posture.",
];

function Exercise() {
  const [search, setSearch] = useState('');
  const [selectedExercise, setSelectedExercise] = useState(null);

  const filtered = allExercises.filter((ex) =>
    ex.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-10 px-4 max-w-6xl mx-auto relative">
      <h2 className="text-3xl font-bold text-pink-700 text-center mb-6">Exercise Suggestions 🧘‍♀️</h2>

      <input
        type="text"
        placeholder="Search exercise (e.g., light, plank...)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="block mx-auto mb-6 px-4 py-2 w-full max-w-md border border-pink-300 rounded-full text-sm text-gray-700 shadow-sm"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((ex, index) => (
          <div
            key={index}
            onClick={() => setSelectedExercise({ ...ex, detail: exerciseDetails[index] })}
            className="cursor-pointer bg-white p-4 rounded-xl shadow-md border border-pink-100 hover:shadow-lg transition-all"
          >
            <img
              src={ex.image}
              alt={ex.name}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold text-pink-700">{ex.name}</h3>
            <p className="text-sm text-gray-500 capitalize">Type: {ex.type}</p>
          </div>
        ))}
      </div>

      {selectedExercise && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full relative shadow-lg">
            <button
              className="absolute top-2 right-4 text-gray-500 text-xl font-bold"
              onClick={() => setSelectedExercise(null)}
            >
              &times;
            </button>
            <img
              src={selectedExercise.image}
              alt={selectedExercise.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-pink-700 mb-2">{selectedExercise.name}</h2>
            <p className="text-sm text-gray-600 mb-2 capitalize">Type: {selectedExercise.type}</p>
            <p className="text-gray-700 text-sm">{selectedExercise.detail}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Exercise;

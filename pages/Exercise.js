
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
  { name: 'Neck Rolls', image: exe1, type: 'light' },
  { name: 'Shoulder Circles', image: exe2, type: 'light' },
  { name: 'Seated Forward Fold', image: exe3, type: 'light' },
  { name: 'Walking', image: exe4, type: 'light' },
  { name: 'Stretching Arms', image: exe5, type: 'light' },
  { name: 'Squats', image: exe6, type: 'heavy' },
  { name: 'Jumping Jacks', image: exe7, type: 'heavy' },
  { name: 'Plank', image: exe8, type: 'heavy' },
  { name: 'Lunges', image: exe9, type: 'heavy' },
  { name: 'Pushups', image: exe10, type: 'heavy' },
];

function Exercise() {
  const [search, setSearch] = useState('');
  const filtered = allExercises.filter((ex) =>
    ex.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-10 px-4 max-w-6xl mx-auto">
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
            className="bg-white p-4 rounded-xl shadow-md border border-pink-100 hover:shadow-lg transition-all"
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
    </div>
  );
}

export default Exercise;

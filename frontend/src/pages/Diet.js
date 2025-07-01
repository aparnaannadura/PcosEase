import React, { useState } from 'react';
import fish from '../Images/fish.jpeg';
import fruits from '../Images/fruits.jpeg';
import sprouts from '../Images/sprouts.jpeg';
import veg from '../Images/veg.image.jpeg';
import fastfood from '../Images/fastfood.jpeg';

const foods = [
  {
    name: 'Grilled Fish',
    image: fish,
    nutrients: 'Omega-3, Protein',
    suggestion: 'Boosts hormones and reduces inflammation.',
  },
  {
    name: 'Fresh Fruits',
    image: fruits,
    nutrients: 'Fiber, Antioxidants, Vitamin C',
    suggestion: 'Supports digestion and skin health.',
  },
  {
    name: 'Sprouts',
    image: sprouts,
    nutrients: 'Iron, Folate, Protein',
    suggestion: 'Improves insulin sensitivity.',
  },
  {
    name: 'Leafy Veggies',
    image: veg,
    nutrients: 'Magnesium, Vitamin A, K',
    suggestion: 'Balances hormones and cleanses liver.',
  },
  {
    name: 'Fast Food 🍔',
    image: fastfood,
    nutrients: 'Sodium, Fat',
    suggestion: 'Avoid to reduce inflammation & acne.',
  },
];

function Diet() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="py-10 px-4 max-w-6xl mx-auto relative">
      <h2 className="text-3xl text-center font-bold text-pink-700 mb-6">Diet Recommendations 🥗</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foods.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all border border-pink-100 cursor-pointer"
            onClick={() => setSelected(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold text-pink-700">{item.name}</h3>
            <p className="text-sm text-gray-500">Tap for more info</p>
          </div>
        ))}
      </div>

      {/* Center popup box */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-xl text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-pink-700 mb-2">{selected.name}</h3>
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <p className="text-sm text-gray-600 mb-1">
              <strong>Nutrients:</strong> {selected.nutrients}
            </p>
            <p className="text-gray-700 mb-4">{selected.suggestion}</p>
            <button
              className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-sm"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Diet;

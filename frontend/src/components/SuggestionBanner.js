import React from 'react';
import fish from '../Images/fish.jpeg';
import fastfood from '../Images/fastfood.jpeg';
import friedfood from '../Images/friedfood.jpeg';
import fruits from '../Images/fruits.jpeg';

const suggestions = [
  {
    image: fish,
    text: 'Choose lean protein like grilled fish 🍽️',
  },
  {
    image: fruits,
    text: 'Add more fiber with fresh fruits 🍓',
  },
  {
    image: fastfood,
    text: 'Reduce fast food intake 🍔',
  },
  {
    image: friedfood,
    text: 'Avoid deep-fried snacks 🛑',
  },
];

function SuggestionBanner() {
  return (
    <div className="w-full bg-pink-50 py-8 px-4 mt-8">
      <h3 className="text-2xl font-bold text-center text-pink-700 mb-4">Daily Wellness Tips 💡</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {suggestions.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            <img src={item.image} alt={`tip-${index}`} className="w-full h-32 object-cover" />
            <p className="p-3 text-sm text-gray-700 font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuggestionBanner;

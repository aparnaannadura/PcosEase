import React from 'react';
import {
  FaLeaf,
  FaClock,
  FaHandHoldingHeart,
  FaUtensils,
  FaHeartbeat,
  FaSmileBeam
} from 'react-icons/fa';

function IntroSection() {
  return (
    <section className="py-16 px-4 bg-white text-center max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-pink-700 mb-6">
        Empower Your Daily Wellness 💖
      </h2>
      <p className="text-gray-700 max-w-3xl mx-auto mb-10 text-lg">
        PCOS isn’t a one-size-fits-all. That’s why we keep it simple: track, learn, and care — all in one beautiful space. Whether you're starting small or building big changes, we're here every step of the way.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        <div className="bg-pink-50 rounded-xl shadow p-6 hover:scale-105 transition-all">
          <FaLeaf className="text-4xl text-pink-500 mx-auto mb-3" />
          <h3 className="font-semibold text-pink-600 mb-2">Natural Guidance</h3>
          <p className="text-sm text-gray-600">
            Learn gentle ways to support your body with nature-based wellness strategies, including mindful breathing and herbal tips.
          </p>
        </div>

        <div className="bg-pink-50 rounded-xl shadow p-6 hover:scale-105 transition-all">
          <FaClock className="text-4xl text-pink-500 mx-auto mb-3" />
          <h3 className="font-semibold text-pink-600 mb-2">Track at Your Pace</h3>
          <p className="text-sm text-gray-600">
            Whether it's once a day or once a week, track symptoms and mood in a judgment-free space. You control the rhythm.
          </p>
        </div>

        <div className="bg-pink-50 rounded-xl shadow p-6 hover:scale-105 transition-all">
          <FaHandHoldingHeart className="text-4xl text-pink-500 mx-auto mb-3" />
          <h3 className="font-semibold text-pink-600 mb-2">Built for Real Women</h3>
          <p className="text-sm text-gray-600">
            Every feature is designed with care — for women juggling daily life, emotions, cycles, and strength.
          </p>
        </div>

        <div className="bg-pink-50 rounded-xl shadow p-6 hover:scale-105 transition-all">
          <FaUtensils className="text-4xl text-pink-500 mx-auto mb-3" />
          <h3 className="font-semibold text-pink-600 mb-2">Smart Food Habits</h3>
          <p className="text-sm text-gray-600">
            Get tailored diet tips to reduce inflammation and balance energy. Includes PCOS-friendly meal advice and reminders.
          </p>
        </div>

        <div className="bg-pink-50 rounded-xl shadow p-6 hover:scale-105 transition-all">
          <FaHeartbeat className="text-4xl text-pink-500 mx-auto mb-3" />
          <h3 className="font-semibold text-pink-600 mb-2">Gentle Movement</h3>
          <p className="text-sm text-gray-600">
            Discover light exercises like yoga, walking, and core boosters that are gentle on hormones but powerful in results.
          </p>
        </div>

        <div className="bg-pink-50 rounded-xl shadow p-6 hover:scale-105 transition-all">
          <FaSmileBeam className="text-4xl text-pink-500 mx-auto mb-3" />
          <h3 className="font-semibold text-pink-600 mb-2">Mental Wellness</h3>
          <p className="text-sm text-gray-600">
            Get daily affirmations and emotional check-ins. Because your peace of mind matters as much as your physical health.
          </p>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;

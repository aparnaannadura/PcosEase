import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diet from './pages/Diet';
import Exercise from './pages/Exercise';
import Symptoms from './pages/Symptoms';
import Profile from './pages/Profile'; // ✅ NEW import

import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 flex flex-col">
      <Nav />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/symptoms" element={<Symptoms />} />
          <Route path="/profile" element={<Profile />} /> {/* ✅ NEW Route */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

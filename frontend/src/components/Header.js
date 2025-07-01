import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-pink-300 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">💜 PCOSEase</h1>
        <nav className="space-x-4 font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/diet" className="hover:underline">Diet</Link>
          <Link to="/exercise" className="hover:underline">Exercise</Link>
          <Link to="/symptoms" className="hover:underline">Symptoms</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

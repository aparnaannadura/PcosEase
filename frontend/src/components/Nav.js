import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaAppleAlt, FaHeartbeat, FaSmile, FaUserCircle } from 'react-icons/fa';

function Nav() {
  const location = useLocation();
  const navStyle = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-full hover:bg-pink-300 transition ${
      location.pathname === path ? 'bg-pink-300 font-semibold' : 'bg-pink-100'
    }`;

  return (
    <nav className="bg-pink-100 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-700">PCOSEase</h1>
        <div className="flex gap-4 text-gray-700 text-sm sm:text-base">
          <Link to="/" className={navStyle('/')}><FaHome /> Home</Link>
          <Link to="/diet" className={navStyle('/diet')}><FaAppleAlt /> Diet</Link>
          <Link to="/exercise" className={navStyle('/exercise')}><FaHeartbeat /> Exercise</Link>
          <Link to="/symptoms" className={navStyle('/symptoms')}><FaSmile /> Symptoms</Link>
          <Link to="/profile" className={navStyle('/profile')}><FaUserCircle /> Profile</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

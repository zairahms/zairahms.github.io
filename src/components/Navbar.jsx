import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
      <div className="mx-auto max-w-7xl px-4">
      <nav className="flex items-center justify-between border-b p-6">

        {/* Left: Name */}
        <Link to="/" className="text-3xl font-bold text-gray-800 hover:text-blue-500"
        >
          Zairah Mustahsan
        </Link>

        {/* Right: Nav Links */}
        <div className="flex space-x-6 text-lg">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/tech" className="hover:underline">Tech</Link>
          <Link to="/musings" className="hover:underline">Musings</Link>
          <Link to="/travel" className="hover:underline">Travel</Link>
        </div>

      </nav>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-teal-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-2xl font-bold">BlogHub</h1>

        {/* Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <FaBars size={24} />
        </button>

        {/* Navigation Links */}
        <ul
          className={`fixed inset-0 z-20 flex flex-col items-center justify-center space-y-6 bg-teal-700 md:static md:flex md:flex-row md:space-y-0 md:space-x-10 md:bg-transparent transition-transform transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          {/* Close Button (Top-Right Corner) */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white md:hidden focus:outline-none"
            aria-label="Close Menu"
          >
            <FaTimes size={24} />
          </button>

          <li className="text-lg hover:text-teal-300 transition">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="text-lg hover:text-teal-300 transition">
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="text-lg hover:text-teal-300 transition">
            <Link href="/posts" onClick={() => setIsMenuOpen(false)}>
              Blogs
            </Link>
          </li>
          <li className="text-lg hover:text-teal-300 transition">
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay for small screens */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-50 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
}

'use client';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link'; // Import Link component from Next.js

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-gray-200 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-6 md:space-y-0 md:space-x-6">
          {/* Brand Name */}
          <h1 className="text-2xl font-bold text-teal-100">BlogHub</h1>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-100 transition"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-100 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-100 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-100 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h2 className="text-lg font-semibold text-teal-100 mb-4">About</h2>
            <p className="text-sm text-gray-300">
              BlogHub is your go-to platform for discovering inspiring stories, sharing knowledge,
              and connecting with like-minded individuals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-teal-100 mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-teal-100 text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-100 text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-100 text-gray-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/posts" className="hover:text-teal-100 text-gray-300">
                  Blog Posts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-teal-100 mb-4">Contact Us</h2>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contact@myblog.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Blog Street, Blogville</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-teal-700 pt-4 text-center">
          <p className="text-teal-100">
            &copy; {new Date().getFullYear()} BlogHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

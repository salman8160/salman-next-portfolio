'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white border-b border-gray-800 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-500 hover:text-purple-400 transition">
          Salman
        </Link>

        <div className="flex space-x-6 text-sm font-semibold">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <Link href="/#about" className="hover:text-purple-400 transition">About</Link>
          <Link href="/#projects" className="hover:text-purple-400 transition">Projects</Link>
          <Link href="/#expertise" className="hover:text-purple-400 transition">Tools</Link>
          <Link href="/#footer" className="hover:text-purple-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

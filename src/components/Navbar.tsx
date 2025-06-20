'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          Salman Tabrez
        </Link>
        <div className="flex space-x-6">
          <Link href="#about" className="text-gray-300 hover:text-cyan-400 transition">About</Link>
          <Link href="#projects" className="text-gray-300 hover:text-cyan-400 transition">Projects</Link>
          <Link href="#blog" className="text-gray-300 hover:text-cyan-400 transition">Blog</Link>
          <Link href="#contact" className="text-gray-300 hover:text-cyan-400 transition">Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
}

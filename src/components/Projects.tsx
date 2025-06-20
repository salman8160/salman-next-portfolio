'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-[#0f172a] py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-8"
      >
        Featured Projects
      </motion.h2>
      
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="px-8 py-4 bg-cyan-500 text-white rounded-lg text-lg font-semibold shadow-lg hover:bg-cyan-400 hover:scale-105 transition-transform"
        onClick={() => window.location.href = '#contact'}
      >
        View Projects 🚀
      </motion.button>
    </section>
  );
}

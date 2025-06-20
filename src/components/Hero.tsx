'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-center px-6"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Cloud Security Architect
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-gray-300 max-w-3xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Designing secure cloud infrastructures, DevSecOps pipelines, and Kubernetes security at scale.
      </motion.p>
      <motion.a
        href="#projects"
        className="px-8 py-4 bg-purple-600 rounded-full text-white font-semibold hover:bg-purple-700 transition"
        whileHover={{ scale: 1.1 }}
      >
        View Projects
      </motion.a>
    </section>
  );
};

export default Hero;

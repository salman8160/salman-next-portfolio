// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 text-center">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Salman Tabrez
      </motion.h1>

      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6 text-purple-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Cloud Security Architect 🚀
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl max-w-3xl mb-8 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Building secure, scalable, high-performance cloud architectures in{" "}
        <span className="text-blue-400 font-semibold">AWS</span>,{" "}
        <span className="text-red-400 font-semibold">GCP</span>, &{" "}
        <span className="text-indigo-400 font-semibold">Azure</span> with{" "}
        <span className="text-green-400 font-semibold">CI/CD</span> and{" "}
        <span className="text-yellow-400 font-semibold">Kubernetes</span>{" "}
        excellence.
      </motion.p>

      <motion.a
        href="#projects"
        className="px-8 py-4 text-lg font-bold text-white rounded-full border-2 border-purple-500 hover:bg-purple-600 hover:text-white transition duration-300 animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        View Projects
      </motion.a>
    </div>
  );
};

export default HeroSection;

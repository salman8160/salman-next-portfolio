'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-[#0f172a] to-black text-white flex items-center justify-center">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={2} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Salman Tabrez <br />
          <span className="text-cyan-400">Cloud Security Architect 🚀</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
          Building secure, scalable, high-performance cloud architectures in AWS, GCP & Azure with CI/CD and Kubernetes excellence.
        </p>
      </motion.div>
    </div>
  );
}

// src/components/Hero3D.tsx

'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'

export default function Hero3D() {
  return (
    <section className="h-screen relative bg-black text-white">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        {/* Placeholder for 3D pipeline model — we will add GLTF here later */}
      </Canvas>

      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Cloud Security Architect & DevSecOps Engineer
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl text-gray-300">
          Expertise in AWS, GCP, Kubernetes, CI/CD Pipeline Security, Zero Trust & Application Security
        </p>
        <a
          href="#projects"
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition"
        >
          Explore Projects
        </a>
      </motion.div>
    </section>
  )
}

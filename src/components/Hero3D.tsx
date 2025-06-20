'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const Hero3D = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-32 text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Salman Tabrez | Cloud Security Architect 🚀
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Building secure, scalable, high-performance cloud architectures in AWS, GCP & Azure with CI/CD and Kubernetes excellence.
        </p>
      </motion.div>

      <Canvas className="w-full h-full" camera={{ position: [0, 0, 5], fov: 75 }}>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        <ambientLight intensity={1.2} />
        <directionalLight position={[0, 5, 5]} intensity={1.5} />

        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusKnotGeometry args={[1, 0.4, 100, 16]} />
          <meshStandardMaterial color="#00ffff" metalness={0.8} roughness={0.1} />
        </mesh>
      </Canvas>
    </section>
  );
};

export default Hero3D;

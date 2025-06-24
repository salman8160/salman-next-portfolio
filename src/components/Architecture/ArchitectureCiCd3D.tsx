'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Sparkles, Float } from '@react-three/drei';

export default function ArchitectureCicd3D() {
  return (
    <div className="w-full h-[500px] bg-black border border-purple-800 rounded-xl p-2">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <OrbitControls enableZoom={false} />

        <Float floatIntensity={2} rotationIntensity={2} speed={1.2}>
          <Sphere args={[1.5, 64, 64]}>
            <meshStandardMaterial
              color="#8b5cf6"
              emissive="#a855f7"
              emissiveIntensity={1}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        </Float>

        <Sparkles
          count={120}
          speed={0.6}
          opacity={0.8}
          color="#a855f7"
          size={3}
          scale={[6, 6, 6]}
        />
      </Canvas>
    </div>
  );
}

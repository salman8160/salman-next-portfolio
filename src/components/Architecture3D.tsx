'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Html } from '@react-three/drei';

export default function Architecture3D() {
  return (
    <div className="w-full h-[400px] mb-10 border border-gray-700 rounded-xl">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />
        <Sphere args={[1, 64, 64]}>
          <meshStandardMaterial color="#8B5CF6" wireframe />
        </Sphere>
        <Html position={[0, -1.5, 0]}>
          <div className="text-purple-400 text-center">Interactive 3D Architecture</div>
        </Html>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}

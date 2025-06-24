'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function ArchitectureAppSec3D() {
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Sphere args={[1, 100, 200]} scale={2}>
          <MeshDistortMaterial
            color="#E91E63" // Application Security color (pink)
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0}
          />
        </Sphere>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

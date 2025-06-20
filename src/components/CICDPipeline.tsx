'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Float } from '@react-three/drei';

export default function CICDPipeline() {
  return (
    <div className="w-full h-[500px] bg-black rounded-xl mt-10 shadow-xl">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        <OrbitControls enableZoom={true} />

        {/* Developer */}
        <Float floatIntensity={2} rotationIntensity={1}>
          <mesh position={[-8, 0, 0]}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial color="#00ffff" />
            <Html distanceFactor={10}>
              <div className="text-center text-white text-sm mt-2">Developer</div>
            </Html>
          </mesh>
        </Float>

        {/* GitHub */}
        <Float floatIntensity={2} rotationIntensity={1}>
          <mesh position={[-4, 0, 0]}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial color="#ff00ff" />
            <Html distanceFactor={10}>
              <div className="text-center text-white text-sm mt-2">GitHub</div>
            </Html>
          </mesh>
        </Float>

        {/* SAST */}
        <Float floatIntensity={2} rotationIntensity={1}>
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial color="#00ff00" />
            <Html distanceFactor={10}>
              <div className="text-center text-white text-sm mt-2">SAST</div>
            </Html>
          </mesh>
        </Float>

        {/* Build */}
        <Float floatIntensity={2} rotationIntensity={1}>
          <mesh position={[4, 0, 0]}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial color="#ffff00" />
            <Html distanceFactor={10}>
              <div className="text-center text-white text-sm mt-2">Build</div>
            </Html>
          </mesh>
        </Float>

        {/* DAST */}
        <Float floatIntensity={2} rotationIntensity={1}>
          <mesh position={[8, 0, 0]}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial color="#ff8800" />
            <Html distanceFactor={10}>
              <div className="text-center text-white text-sm mt-2">DAST</div>
            </Html>
          </mesh>
        </Float>

        {/* Deploy */}
        <Float floatIntensity={2} rotationIntensity={1}>
          <mesh position={[12, 0, 0]}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial color="#ff4444" />
            <Html distanceFactor={10}>
              <div className="text-center text-white text-sm mt-2">Deploy</div>
            </Html>
          </mesh>
        </Float>

        {/* Monitor */}
        <Float floatIntensity={2} rotationIntensity={1}>
          <mesh position={[16, 0, 0]}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial color="#44ff44" />
            <Html distanceFactor={10}>
              <div className="text-center text-white text-sm mt-2">Monitor</div>
            </Html>
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
}

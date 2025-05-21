
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Environment } from '@react-three/drei';
import { Mesh } from 'three';

const NailShape = ({ color = "#ec4899" }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });
  
  return (
    <mesh ref={meshRef}>
      {/* Nail base shape */}
      <cylinderGeometry args={[0.5, 0.5, 0.05, 32, 1, false, 0, Math.PI]} />
      <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
      
      {/* Nail extension */}
      <mesh position={[0, 0, 0.025]}>
        <cylinderGeometry args={[0.5, 0.4, 0.8, 32, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
      </mesh>
    </mesh>
  );
};

type NailModel3DProps = {
  color?: string;
  className?: string;
};

const NailModel3D: React.FC<NailModel3DProps> = ({ color = "#ec4899", className = "" }) => {
  return (
    <div className={`w-full h-64 ${className}`}>
      <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <group rotation={[-Math.PI / 3, 0, 0]}>
          <NailShape color={color} />
        </group>
        
        <Environment preset="studio" />
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
};

export default NailModel3D;

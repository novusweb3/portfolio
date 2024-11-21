import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { useState, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';

function LogoGeometry() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}
    >
      <torusGeometry args={[1, 0.3, 16, 32]} />
      <meshStandardMaterial
        color={hovered ? "#8B5CF6" : "#6D28D9"}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function AnimatedLogo() {
  return (
    <div className="logo-container">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <LogoGeometry />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
} 
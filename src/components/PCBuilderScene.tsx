
import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

interface SelectedParts {
  cpu: any;
  motherboard: any;
  ram: any;
  storage: any;
  gpu: any;
  psu: any;
  case: any;
  cooling: any;
  monitor: any;
  keyboard: any;
  mouse: any;
}

interface PCBuilderSceneProps {
  selectedParts: SelectedParts;
}

// Simple 3D representations using basic mesh geometry
const PCCase = () => {
  return (
    <mesh position={[0, 0, 0]} scale={[2, 3, 1.5]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} transparent={true} opacity={0.3} envMapIntensity={0.5} />
    </mesh>
  );
};

const CPU = ({ position }: { position: [number, number, number] }) => {
  return (
    <mesh position={position} scale={[0.3, 0.1, 0.3]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#4a90e2" metalness={0.9} roughness={0.1} />
    </mesh>
  );
};

const Motherboard = ({ position }: { position: [number, number, number] }) => {
  return (
    <mesh position={position} scale={[1.5, 0.05, 1]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#0f4a3c" metalness={0.3} roughness={0.7} />
    </mesh>
  );
};

const RAM = ({ position }: { position: [number, number, number] }) => {
  return (
    <mesh position={position} scale={[0.1, 0.5, 0.8]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#2ecc71" metalness={0.6} roughness={0.4} />
    </mesh>
  );
};

const GPU = ({ position }: { position: [number, number, number] }) => {
  return (
    <mesh position={position} scale={[0.8, 0.3, 1.2]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#e74c3c" metalness={0.8} roughness={0.2} />
    </mesh>
  );
};

const Storage = ({ position }: { position: [number, number, number] }) => {
  return (
    <mesh position={position} scale={[0.4, 0.1, 0.6]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#9b59b6" metalness={0.5} roughness={0.5} />
    </mesh>
  );
};

const PSU = ({ position }: { position: [number, number, number] }) => {
  return (
    <mesh position={position} scale={[0.8, 0.4, 0.6]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#34495e" metalness={0.7} roughness={0.3} />
    </mesh>
  );
};

const SceneFallback = () => (
  <div className="w-full h-full flex items-center justify-center bg-gray-100">
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
        <span className="text-white font-bold">3D</span>
      </div>
      <p className="text-gray-600">3D Scene Loading...</p>
    </div>
  </div>
);

const ErrorFallback = () => (
  <div className="w-full h-full flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="w-16 h-16 bg-red-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
        <span className="text-white font-bold">!</span>
      </div>
      <p className="text-gray-600">3D preview not available</p>
      <p className="text-sm text-gray-500 mt-2">Component selection still works</p>
    </div>
  </div>
);

const PCBuilderScene: React.FC<PCBuilderSceneProps> = ({ selectedParts }) => {
  const [hasError, setHasError] = useState(false);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  useEffect(() => {
    // Check WebGL support more thoroughly
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl || gl.isContextLost()) {
        console.warn('WebGL not supported or context lost');
        setIsWebGLSupported(false);
      }
    } catch (e) {
      console.warn('WebGL check failed:', e);
      setIsWebGLSupported(false);
    }
  }, []);

  if (!isWebGLSupported || hasError) {
    return <ErrorFallback />;
  }

  try {
    return (
      <div className="w-full h-full">
        <Canvas 
          camera={{ position: [4, 2, 4], fov: 50 }}
          onCreated={({ gl }) => {
            gl.setClearColor('#f5f5f5');
          }}
          fallback={<SceneFallback />}
        >
          <Suspense fallback={null}>
            <Environment preset="city" />
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, 5, -5]} intensity={0.3} />
            
            {/* Base PC Case */}
            <PCCase />
            
            {/* Conditional rendering of selected parts */}
            {selectedParts.motherboard && (
              <Motherboard position={[0, -0.8, 0]} />
            )}
            
            {selectedParts.cpu && (
              <CPU position={[0.2, -0.7, 0.2]} />
            )}
            
            {selectedParts.ram && (
              <RAM position={[0.5, -0.5, 0]} />
            )}
            
            {selectedParts.gpu && (
              <GPU position={[0, -0.3, 0.2]} />
            )}
            
            {selectedParts.storage && (
              <Storage position={[-0.6, -1, 0.3]} />
            )}
            
            {selectedParts.psu && (
              <PSU position={[0, -1.3, 0]} />
            )}
            
            <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={3}
              maxDistance={10}
            />
          </Suspense>
        </Canvas>
      </div>
    );
  } catch (error) {
    console.error('PCBuilderScene render error:', error);
    return <ErrorFallback />;
  }
};

export default PCBuilderScene;

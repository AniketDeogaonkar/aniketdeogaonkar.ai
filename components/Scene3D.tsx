import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { Float, Points, PointMaterial, Environment, Line } from '@react-three/drei';
import * as THREE from 'three';

const ComputingFibonacci = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 3000; // Number of particles

  // Generate Phyllotaxis (Fibonacci Spiral) points
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden Angle

    for (let i = 0; i < count; i++) {
      const distance = Math.sqrt(i) * 0.1; // Distance from center
      const theta = phi * i; // Angle

      // Cylindrical/Spiral coordinates converted to 3D
      const x = distance * Math.cos(theta);
      const y = distance * Math.sin(theta);
      const z = (i / count) * 4 - 2; // Spread along Z axis for depth

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color gradient
      const color = new THREE.Color();
      // Mix between blue and primary cyan based on index
      color.setHSL((i / count) * 0.2 + 0.5, 0.8, 0.6); 
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Rotate the entire system
      pointsRef.current.rotation.z = time * 0.05;
      pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;

      // Pulse effect to simulate calculation
      // We can't easily animate individual vertices in a standard buffer geometry without a custom shader
      // so we scale the container slightly to "breathe"
      const scale = 1 + Math.sin(time * 2) * 0.02;
      pointsRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group rotation={[Math.PI / 4, 0, 0]}>
        <Points ref={pointsRef} positions={positions} colors={colors} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                vertexColors
                size={0.03}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    </group>
  );
};

const DataStream = () => {
    // A secondary particle system to look like data moving
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh position={[2, 1, -1]}>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={2} toneMapped={false} />
            </mesh>
            <mesh position={[-2, -1, 0]}>
                <boxGeometry args={[0.2, 0.2, 0.2]} />
                <meshStandardMaterial color="#0EA5E9" emissive="#0EA5E9" emissiveIntensity={2} toneMapped={false} />
            </mesh>
        </Float>
    )
}

const GoldenSpiralLine = () => {
    const groupRef = useRef<THREE.Group>(null);
    
    const points = useMemo(() => {
        const pts = [];
        const numPoints = 150;
        // Logarithmic spiral r = a * e^(b*theta)
        // b = ln(phi) / (pi/2) approx 0.306
        const b = 0.306; 
        
        for(let i = 0; i < numPoints; i++) {
            const theta = i * 0.1;
            // Slow growth
            const r = 0.2 * Math.exp(0.2 * theta); 
            
            const x = r * Math.cos(theta);
            const y = r * Math.sin(theta);
            // Slight helix effect along Z to give it 3D depth
            const z = (i / numPoints) * 2 - 1; 
            
            pts.push(new THREE.Vector3(x, y, z));
        }
        return pts;
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            // Gentle rotation to complement the particles
            groupRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
            groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
        }
    });

    return (
        <group ref={groupRef} position={[0,0,-1]}>
            {/* Primary Blue Line */}
            <Line 
                points={points} 
                color="#3B82F6" 
                lineWidth={1} 
                opacity={0.4} 
                transparent 
            />
             {/* Secondary Sky Blue Reflection (rotated 180 deg) */}
            <group rotation={[0, 0, Math.PI]}>
                <Line 
                    points={points} 
                    color="#0EA5E9" 
                    lineWidth={1} 
                    opacity={0.2} 
                    transparent 
                />
            </group>
        </group>
    );
};

const Scene3D: React.FC = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 -z-0 pointer-events-none bg-transparent">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ alpha: true }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* Computing Pattern */}
        <ComputingFibonacci />
        
        {/* Added Golden Spiral Line */}
        <GoldenSpiralLine />
        
        {/* Floating Data Nodes */}
        <DataStream />

        {/* Post-processing feel via fog - matches dark mode background */}
        <fog attach="fog" args={['#0B0F19', 5, 15]} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
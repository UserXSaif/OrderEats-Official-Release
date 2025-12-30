'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Float, MeshTransmissionMaterial, Trail } from '@react-three/drei'
import * as THREE from 'three'

function Head() {
    return (
        <group>
            {/* Main Head Shape - Glossy Black */}
            <mesh position={[0, 0, 0]}>
                <capsuleGeometry args={[1, 1.5, 4, 16]} />
                <meshStandardMaterial
                    color="#050505"
                    roughness={0.2}
                    metalness={0.9}
                />
            </mesh>

            {/* Glowing Visor */}
            <mesh position={[0, 0.2, 0.85]} rotation={[0.1, 0, 0]}>
                <boxGeometry args={[1.4, 0.3, 0.1]} />
                <meshStandardMaterial
                    color="#ff5500"
                    emissive="#ff5500"
                    emissiveIntensity={4}
                    toneMapped={false}
                />
            </mesh>

            {/* Side Ears/Headphones */}
            <mesh position={[1.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.4, 0.4, 0.2]} />
                <meshStandardMaterial color="#111" metalness={0.8} />
            </mesh>
            <mesh position={[-1.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.4, 0.4, 0.2]} />
                <meshStandardMaterial color="#111" metalness={0.8} />
            </mesh>

            {/* Neck */}
            <mesh position={[0, -1.2, 0]}>
                <cylinderGeometry args={[0.4, 0.6, 1]} />
                <meshStandardMaterial
                    color="#1a1a1a"
                    roughness={0.5}
                    metalness={0.8}
                    wireframe={true} /* Mechanical look */
                />
            </mesh>
        </group>
    )
}

function FloatingRig() {
    const group = useRef<any>(null)

    useFrame((state) => {
        if (group.current) {
            // Subtle head movement looking around
            group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
            group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
        }
    })

    return (
        <group ref={group}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <Head />
            </Float>
        </group>
    )
}

export default function RobotFace() {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#ff5500" />
                <pointLight position={[-10, -5, -10]} intensity={0.5} color="blue" />
                <spotLight position={[0, 5, 5]} angle={0.5} penumbra={1} intensity={2} />
                <FloatingRig />
            </Canvas>
        </div>
    )
}

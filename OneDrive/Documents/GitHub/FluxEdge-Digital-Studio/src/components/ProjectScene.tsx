'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { MeshDistortMaterial, RoundedBox, Float, Grid } from '@react-three/drei'
import * as THREE from 'three'

function RotatingShape({ color }: { color: string }) {
    const mesh = useRef<THREE.Mesh>(null)
    const [hovered, setHover] = useState(false)

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x += delta * 0.2
            mesh.current.rotation.y += delta * 0.3
        }
    })

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={mesh}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                scale={hovered ? 2.5 : 2.2} // Increased scale to fill background
            >
                <torusKnotGeometry args={[1.5, 0.4, 150, 20]} />
                <MeshDistortMaterial
                    color={color}
                    speed={2}
                    distort={0.4}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    )
}

function WireframeBox() {
    return (
        <Float speed={3} rotationIntensity={1.5} floatIntensity={1}>
            <mesh scale={[1.8, 1.8, 1.8]}>
                <icosahedronGeometry args={[2, 2]} />
                <meshStandardMaterial color="#00ff88" wireframe side={THREE.DoubleSide} />
            </mesh>
        </Float>
    )
}

function Particles() {
    const ref = useRef<any>(null)
    useFrame((state, delta) => {
        if (ref.current) ref.current.rotation.y += delta * 0.1
    })
    return (
        <points ref={ref}>
            <sphereGeometry args={[2, 32, 32]} />
            <pointsMaterial size={0.02} color="#7000ff" />
        </points>
    )
}

export default function ProjectScene({ type }: { type: string }) {
    return (
        <div style={{ width: '100%', height: '100%', background: '#0a0a0a' }}>
            <Canvas camera={{ position: [0, 0, 4] }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />

                <Grid fadeDistance={30} fadeStrength={5} infiniteGrid position={[0, -2, 0]} sectionSize={1} cellColor="#333" sectionColor="#555" />

                {type === 'Abstract Geometry' && <RotatingShape color="#ffffff" />}
                {type === 'Liquid Futura' && <RotatingShape color="#00ff88" />}
                {type === 'Neon Cyber' && (
                    <>
                        <WireframeBox />
                        <Particles />
                    </>
                )}
            </Canvas>
        </div>
    )
}

'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'

export default function Scene3D() {
    return (
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Stars />
        </Canvas>
    )
}

function Stars(props: any) {
    const ref = useRef<any>(null)

    // Generate random points in sphere manually to avoid maath dependency issues
    const sphere = useMemo(() => {
        const count = 8000;
        const radius = 1.2;
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            const r = Math.cbrt(Math.random()) * radius; // Cube root for uniform distribution

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }
        return positions;
    }, [])

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10
            ref.current.rotation.y -= delta / 15
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ff5500"
                    size={0.015} // Larger particles for solid tech look
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

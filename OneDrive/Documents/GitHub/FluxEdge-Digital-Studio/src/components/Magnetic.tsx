'use client'
import { useRef, ReactElement, cloneElement } from 'react'
import gsap from 'gsap'

export default function Magnetic({ children }: { children: ReactElement }) {
    const ref = useRef<HTMLElement>(null)

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return

        const { height, width, left, top } = rect
        const x = clientX - (left + width / 2)
        const y = clientY - (top + height / 2)

        gsap.to(ref.current, { x: x * 0.3, y: y * 0.3, duration: 1, ease: 'power3.out' })
    }

    const handleMouseLeave = () => {
        gsap.to(ref.current, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)' })
    }

    return cloneElement(children, {
        ref,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave
    } as any)
}

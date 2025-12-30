'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Vision.module.css'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function Vision() {
    const container = useRef<HTMLElement>(null)
    const textRef = useRef<HTMLHeadingElement>(null)

    useGSAP(() => {
        const words = gsap.utils.toArray(`.${styles.word}`)

        gsap.to(words, {
            scrollTrigger: {
                trigger: container.current,
                start: 'top top',
                end: '+=150%',
                scrub: 1,
                pin: true,
            },
            color: '#ffffff',
            stagger: 0.1,
            opacity: 1,
            filter: 'blur(0px)',
            transform: 'translateY(0) scale(1)',
        })

    }, { scope: container })

    const text = "We don't just build websites. We forge digital realities that captivate, convert, and conquer."

    return (
        <section ref={container} className={styles.visionSection}>
            <div className={styles.content}>
                <h2 ref={textRef} className={styles.visionText}>
                    {text.split(' ').map((word, i) => (
                        <span key={i} className={styles.word}>{word} </span>
                    ))}
                </h2>
            </div>
            {/* Background elements */}
            <div className={styles.bgGlow}></div>
        </section>
    )
}

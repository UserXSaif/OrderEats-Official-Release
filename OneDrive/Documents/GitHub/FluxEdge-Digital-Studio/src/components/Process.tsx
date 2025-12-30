'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Process.module.css'
import useSound from '@/hooks/useSound'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const steps = [
    { num: '01', title: 'Discovery', desc: 'We dive deep into your brand DNA, decoding the core values that drive your vision.' },
    { num: '02', title: 'Strategy', desc: 'Architecting the blueprint. We map user journeys that convert visitors into believers.' },
    { num: '03', title: 'Design', desc: 'Visual alchemy. We craft pixel-perfect interfaces that blur the line between utility and art.' },
    { num: '04', title: 'Development', desc: 'Code that breathes. High-performance engineering built for scale and speed.' }
]

export default function Process() {
    const container = useRef<HTMLElement>(null)
    const track = useRef<HTMLDivElement>(null)
    const { play } = useSound()

    useGSAP(() => {
        const mm = gsap.matchMedia()

        mm.add("(min-width: 769px)", () => {
            const sections = gsap.utils.toArray(`.${styles.step}`)
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: container.current,
                    pin: true,
                    scrub: 1,
                    end: '+=3000',
                }
            })
        })

        // Mobile animation (Optional: simple fade up)
        mm.add("(max-width: 768px)", () => {
            // No pinning, just natural scroll with entry animations if desired
            const steps = gsap.utils.toArray<HTMLElement>('.step')
            steps.forEach(step => {
                gsap.from(step.querySelector('.card'), {
                    scrollTrigger: {
                        trigger: step,
                        start: 'top 80%'
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8
                })
            })
        })

    }, { scope: container })

    return (
        <section ref={container} className={styles.processSection}>
            <div className={styles.header}>
                <h2>The Process</h2>
                <div className={styles.line}></div>
            </div>

            <div ref={track} className={styles.track}>
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className={`${styles.step} step`}
                        onMouseEnter={() => play('hover')}
                    >
                        <div className={styles.card}>
                            <span className={styles.num}>{step.num}</span>
                            <h3 className={styles.title}>{step.title}</h3>
                            <p className={styles.desc}>{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

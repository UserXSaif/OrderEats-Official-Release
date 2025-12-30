'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import styles from './Services.module.css'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const services = [
    { title: 'Brand Identity', desc: 'Crafting unique visual systems that define market leaders.', icon: '❖' },
    { title: 'Digital Design', desc: 'Creating immersive, user-centric interfaces across all devices.', icon: '⟡' },
    { title: 'Development', desc: 'Robust, scalable, and high-performance technical solutions.', icon: '⚡' },
    { title: 'Motion & 3D', desc: 'Adding depth and life to stories through advanced kinematics.', icon: '◈' }
]

export default function Services() {
    const container = useRef(null)

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>('.service-card')

        gsap.fromTo(cards,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        )
    }, { scope: container })

    return (
        <section id="services" ref={container} className={`${styles.services} section container`}>
            <h2 className={styles.heading}>Services</h2>
            <div className={styles.grid}>
                {services.map((s, i) => (
                    <div key={i} className={`${styles.card} service-card`}>
                        <div className={styles.cardIndex}>0{i + 1}</div>
                        <div className={styles.cardIcon}>{s.icon}</div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{s.title}</h3>
                            <p className={styles.cardDesc}>{s.desc}</p>
                        </div>
                        <div className={styles.cardOverlay}></div>
                        <div className={styles.cardCorner}></div>
                    </div>
                ))}
            </div>
        </section>
    )
}

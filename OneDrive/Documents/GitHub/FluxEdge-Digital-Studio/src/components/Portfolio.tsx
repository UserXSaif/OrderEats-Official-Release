'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import styles from './Portfolio.module.css'
import dynamic from 'next/dynamic'

const ProjectScene = dynamic(() => import('./ProjectScene'), { ssr: false, loading: () => <div style={{ background: '#111', width: '100%', height: '100%' }} /> })

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const projects = [
    { title: 'Abstract Geometry', cat: 'Art Direction', year: '2024', desc: 'Exploration of form and void in digital space.', tags: ['WebGL', 'React', 'GSAP'], img: '/p1.png' },
    { title: 'Liquid Futura', cat: 'Motion Design', year: '2025', desc: 'Fluid dynamics simulation for next-gen interfaces.', tags: ['Three.js', 'Physics', 'UI/UX'], img: '/p2.png' },
    { title: 'Neon Cyber', cat: 'Web Experience', year: '2023', desc: 'Immersive cyberpunk city walkthrough.', tags: ['Gaming', 'Immersion', 'Audio'], img: '/p3.png' }
]

export default function Portfolio() {
    const container = useRef(null)

    useGSAP(() => {
        const projects = gsap.utils.toArray<HTMLElement>('.project-wrapper')
        gsap.fromTo(projects,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 75%'
                }
            }
        )
    }, { scope: container })

    return (
        <section ref={container} className={styles.portfolio}>
            <h2 className={styles.heading}>Selected Work</h2>

            <div className={styles.gallery}>
                {projects.map((p, i) => (
                    <div key={i} className={`${styles.project} project-wrapper`}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.overlay}></div>
                            <img src={p.img} alt={p.title} className={styles.projectImg} />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.metaRow}>
                                <span>{p.cat}</span>
                                <span>/</span>
                                <span>{p.year}</span>
                            </div>
                            <h3 className={styles.title}>{p.title}</h3>
                            <p className={styles.desc}>{p.desc}</p>
                            <div className={styles.tagRow}>
                                {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

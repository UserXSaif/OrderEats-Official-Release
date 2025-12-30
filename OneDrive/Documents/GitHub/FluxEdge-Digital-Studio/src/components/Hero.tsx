'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styles from './Hero.module.css'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import useSound from '@/hooks/useSound'

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false })
const RobotFace = dynamic(() => import('./RobotFace'), { ssr: false })

export default function Hero() {
    const container = useRef<HTMLElement>(null)
    const { play } = useSound()

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        // Ensure card scales in
        tl.from(`.${styles.heroContainerCard}`, { scale: 0.95, opacity: 0, duration: 1 })
            .from(`.${styles.heroTitle}`, { x: -30, opacity: 0, duration: 1 }, '-=0.5')
            .from(`.${styles.HeroDesc}`, { opacity: 0, duration: 1 }, '-=0.8')

    }, { scope: container })

    return (
        <section ref={container} className={styles.heroSection}>
            {/* BACKGROUND: Particle Animation covering entire section */}
            <div className={styles.fullBackgroundVisual}>
                <Scene3D />
            </div>

            <div className={styles.bgTexture}></div>

            {/* The Main Card Container */}
            <div className={styles.heroContainerCard}>

                {/* Internal Header inside the card */}
                {/* Internal Header removed to avoid double navbar per user request */}
                <div className={styles.cardHeader}>
                    <span className={styles.headerBrand}>AIBOT FUTURISTIC</span>
                    {/* Access to primary nav is via the global fixed navbar */}
                    <Link href="/contact" className={styles.headerBtn}>Get in Touch</Link>
                </div>

                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Smart<br />
                        <span style={{ color: 'var(--color-primary)' }}>Tech For</span><br />
                        Tomorrow
                    </h1>

                    <p className={styles.heroDesc}>
                        Shaping tomorrow, robotics and AI are transforming industries, enhancing human capabilities, and redefining what technology can achieve.
                    </p>

                    <div className={styles.ctaRow}>
                        <Link
                            href="/contact"
                            className={styles.mainBtn}
                            onMouseEnter={() => play('hover')}
                            onClick={() => play('click')}
                        >
                            Discover More
                        </Link>
                    </div>
                </div>

                <div className={styles.visualContainer}>
                    {/* FOREGROUND: Generated Robot Image with CSS Animation */}
                    <div className={styles.robotWrapper}>
                        <div className={styles.robotScanline}></div>
                        <img
                            src="/robot-head.png"
                            alt="Futuristic Robot"
                            className={styles.robotImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

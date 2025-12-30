'use client'
import Link from 'next/link'
import styles from './Navbar.module.css'
import Magnetic from './Magnetic'
import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50 && !scrolled) {
            setScrolled(true)
        } else if (latest <= 50 && scrolled) {
            setScrolled(false)
        }
    })

    return (
        <motion.header
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <Magnetic>
                <Link href="/" className={styles.logo}>
                    FluxEdge<span>.</span>
                </Link>
            </Magnetic>

            <nav className={styles.navItems}>
                {['Work', 'Services', 'About'].map((item) => (
                    <Magnetic key={item}>
                        <Link href={`/${item.toLowerCase()}`} className={styles.link}>
                            {item}
                        </Link>
                    </Magnetic>
                ))}

                <Magnetic>
                    <Link href="/contact" className={styles.ctaButton}>
                        Start a Project
                    </Link>
                </Magnetic>
            </nav>

            <button className={styles.menuBtn}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>

        </motion.header>
    )
}

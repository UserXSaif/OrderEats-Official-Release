'use client'
import styles from './Footer.module.css'
import Link from 'next/link'
import Magnetic from './Magnetic'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.brandCol}>
                        <h2 className={styles.logo}>FLUXEDGE<span>.</span></h2>
                        <p className={styles.mission}>
                            Redefining the digital frontier with advanced robotics integration and immersive web experiences.
                        </p>
                    </div>

                    <div className={styles.linksCol}>
                        <h3 className={styles.colTitle}>Company</h3>
                        <Link href="#">About Us</Link>
                        <Link href="#">Services</Link>
                        <Link href="#">Careers</Link>
                        <Link href="#">News</Link>
                    </div>

                    <div className={styles.linksCol}>
                        <h3 className={styles.colTitle}>Resources</h3>
                        <Link href="#">Documentation</Link>
                        <Link href="#">API Reference</Link>
                        <Link href="#">Community</Link>
                        <Link href="#">Support</Link>
                    </div>

                    <div className={styles.newsletterCol}>
                        <h3 className={styles.colTitle}>Stay Updated</h3>
                        <p className={styles.newsletterDesc}>Join our newsletter for the latest AI breakthroughs.</p>
                        <div className={styles.inputGroup}>
                            <input type="email" placeholder="Enter your email" />
                            <button>→</button>
                        </div>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.bottomSection}>
                    <div className={styles.copy}>
                        &copy; 2025 FluxEdge Digital Studio. All rights reserved.
                    </div>
                    <div className={styles.socials}>
                        <a href="#">TWITTER</a>
                        <a href="#">LINKEDIN</a>
                        <a href="#">GITHUB</a>
                        <a href="#">DISCORD</a>
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <div className={styles.bgGlow}></div>
        </footer>
    )
}

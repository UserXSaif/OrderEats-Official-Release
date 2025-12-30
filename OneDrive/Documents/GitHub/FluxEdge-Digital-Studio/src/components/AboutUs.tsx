'use client'
import styles from './AboutUs.module.css'
import Image from 'next/image'

export default function AboutUs() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.leftCol}>
                    {/* Left Column: Video Feed Visual */}
                    <div className={styles.visualContainer}>
                        <div className={styles.videoFrame}>
                            <img
                                src="/robot-lab.png"
                                alt="Robot Lab Feed"
                                className={styles.videoImage}
                            />
                            <div className={styles.scanlines}></div>
                            <div className={styles.videoOverlay}>
                                <div className={styles.recTag}>
                                    <span className={styles.recDot}></span> REC
                                </div>
                                <div className={styles.timeCode}>00:14:23:09</div>
                                <div className={styles.crosshair}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.rightCol}>
                    <span className={styles.label}>About Us</span>
                    <h2 className={styles.title}>Redefining Human-Robot Collaboration</h2>

                    <p className={styles.desc}>
                        Tesla Bot marks a bold step forward in robotics, blending Tesla's expertise in AI with human-inspired functionality. Built to assist with everyday, repetitive tasks, this 5'8" robot brings a new level of precision.
                    </p>

                    <button className={styles.btn}>Get Started</button>
                </div>
            </div>
        </section>
    )
}

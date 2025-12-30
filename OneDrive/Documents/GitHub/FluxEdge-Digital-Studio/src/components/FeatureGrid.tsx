'use client'
import styles from './FeatureGrid.module.css'

const features = [
    { title: 'Autonomous Learning', desc: 'Capable of learning tasks through AI. Adapt over time for improved performance in various settings.' },
    { title: 'Vision & Sensor Array', desc: 'Designed with actuators to handle delicate tasks or repetitive motions with ease.' },
    { title: 'Humanoid Dexterity', desc: 'Tesla Bot incorporates Teslas leading AI technology and precise engineering.' },
    { title: '16 Years', desc: 'Work Experience in advanced robotics and AI development.' }
]

export default function FeatureGrid() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <span className={styles.label}>Key Features</span>
                <h2 className={styles.title}>Advanced AI and Precision</h2>
            </div>

            <div className={styles.grid}>
                {features.map((f, i) => (
                    <div key={i} className={styles.card}>
                        <h3 className={styles.cardTitle}>{f.title}</h3>
                        <p className={styles.cardDesc}>{f.desc}</p>
                        <div className={styles.decoration}></div>
                    </div>
                ))}
            </div>
        </section>
    )
}

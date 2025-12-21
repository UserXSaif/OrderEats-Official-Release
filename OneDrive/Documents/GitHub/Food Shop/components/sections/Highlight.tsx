'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Utensils, Zap } from 'lucide-react';
import styles from './Highlight.module.css';

const Highlight = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0.4, 0.6], [5, 0]);

    return (
        <section className={styles.highlight}>
            <div className={`${styles.container} container`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className={styles.header}
                >
                    <div className={styles.iconBox}>
                        <Sparkles className={styles.sparkle} size={24} />
                    </div>
                    <h2 className={styles.title}>Culinary <span className="text-gradient">Breakthrough</span></h2>
                    <p className={styles.subtitle}>Beyond Conventional Cooking</p>
                    <p className={styles.description}>
                        Our chefs integrate biological precision with heritage recipes. Every dish is a
                        coordinated effort of temperature control, osmotic pressure, and pure love.
                    </p>
                </motion.div>

                <div className={styles.contentGrid}>
                    <motion.div
                        style={{ scale, rotate }}
                        className={styles.mainVisual}
                    >
                        <div className={styles.visualGlow} />
                        <Image
                            src="/images/hero_collage_1766250332911.png"
                            alt="Highlight Masterpiece"
                            fill
                            style={{ objectFit: 'cover' }}
                            className={styles.image}
                        />
                        <div className={styles.dataOverlay}>
                            <div className={styles.dataPoint}>
                                <Zap size={14} />
                                <span>98% Freshness Index</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className={styles.featureList}>
                        {[
                            { icon: Utensils, title: 'Precision Sourcing', text: 'Verified suppliers with real-time quality tracking.' },
                            { icon: Sparkles, title: 'Flavor Alchemy', text: 'Molecular balance for enhanced bio-availability.' },
                            { icon: Zap, title: 'Rapid Deployment', text: 'Thermal-optimized delivery systems.' }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className={`${styles.featureItem} glass`}
                            >
                                <div className={styles.featureIcon}>
                                    <feature.icon size={20} />
                                </div>
                                <div className={styles.featureText}>
                                    <h4>{feature.title}</h4>
                                    <p>{feature.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlight;

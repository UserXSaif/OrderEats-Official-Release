'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingBag, ArrowRight, Star } from 'lucide-react';
import styles from './Hero.module.css';

export const HeroPrimary = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className={styles.heroPrimary}>
            <div className={`${styles.container} container`}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={styles.content}
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className={styles.badge}
                    >
                        <Star size={14} className={styles.star} />
                        Silicon Valley Grade Cuisine
                    </motion.span>

                    <h1 className={styles.title}>
                        Where Tech Meets <br />
                        <span className="text-gradient">Authentic Flavor</span>
                    </h1>

                    <p className={styles.description}>
                        Experience the future of nutrition with OrderEats. Our planetary delivery network connects you with elite culinary engineers using quantum-grade tracking.
                    </p>

                    <div className={styles.ctaGroup}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.primaryBtn}
                        >
                            Explore Menus
                            <ShoppingBag size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ x: 5 }}
                            className={styles.secondaryBtn}
                        >
                            Learn the Science
                            <ArrowRight size={20} />
                        </motion.button>
                    </div>
                </motion.div>

                <div className={styles.visuals}>
                    <motion.div style={{ y: y1 }} className={styles.mainImageWrapper}>
                        <div className={styles.imageGlow} />
                        <Image
                            src="/images/hero_collage_1766250332911.png"
                            alt="Futuristic Food"
                            fill
                            priority
                            style={{ objectFit: 'cover' }}
                            className={styles.mainImage}
                        />
                    </motion.div>

                    <motion.div
                        style={{ y: y2 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className={styles.floatingCard}
                    >
                        <div className={`${styles.miniCard} glass`}>
                            <div className={styles.miniIcon}>🥗</div>
                            <div>
                                <h4>Fresh System</h4>
                                <p>100% Organic</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export const HeroSecondary = () => {
    return (
        <section className={styles.heroSecondary}>
            <div className={`${styles.container} container`}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`${styles.promoCard} glass`}
                >
                    <div className={styles.promoImageWrapper}>
                        <Image
                            src="/images/hero_bread_1766250348212.png"
                            alt="Digital Crust"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                        <div className={styles.promoOverlay} />
                    </div>
                    <div className={styles.promoContent}>
                        <h2 className={styles.promoTitle}>
                            Symphony of <span className="text-gradient">Sensors & Senses</span>
                        </h2>
                        <p>Every bite is precision-engineered for maximum nutritional bioavailability and taste profile.</p>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--primary-glow)" }}
                            className={styles.neonBtn}
                        >
                            Discover the Process
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

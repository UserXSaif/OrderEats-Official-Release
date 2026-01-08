'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, Truck, CheckCircle, Zap, ShieldCheck, Globe } from 'lucide-react';
import Image from 'next/image';
import styles from './how-it-works.module.css';

const steps = [
    {
        title: 'Localize Nutrition',
        description: 'Browse our decentralized culinary grid to find perfectly calibrated meals from elite local chefs.',
        icon: Search
    },
    {
        title: 'Initiate Sync',
        description: 'Customize your order and initiate the secure exchange via our quantum-grade payment tunnel.',
        icon: ShoppingBag
    },
    {
        title: 'Real-time Vector',
        description: 'Track your specialized delivery pod in real-time as it navigates the urban sector to your node.',
        icon: Truck
    },
    {
        title: 'Sync Complete',
        description: 'Confirm the arrival of your high-fidelity meal and contribute to our community karma pool.',
        icon: CheckCircle
    }
];

const HowItWorksPage = () => {
    return (
        <div className={styles.howItWorks}>
            <div className="container">
                <div className={styles.header}>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gradient"
                    >
                        The OrderEats Protocol
                    </motion.h1>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
                        Synchronizing elite culinary engineering with your doorstep.
                    </p>
                </div>

                <div className={styles.processGrid}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className={`${styles.stepCard} glass`}
                        >
                            <div className={styles.stepHeader}>
                                <span className={styles.stepNumber}>0{i + 1}</span>
                                <div className={styles.iconWrapper}>
                                    <step.icon size={30} color="var(--primary)" />
                                </div>
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                            <div className={styles.cardGlow} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`${styles.highlightSection} glass`}
                >
                    <div className={styles.highlightContent}>
                        <div className={styles.highlightText}>
                            <h2 className="text-gradient">The Delivery Node</h2>
                            <p>
                                Our autonomous delivery pods are the heart of the OrderEats network.
                                Equipped with thermal stabilization and quantum-grade sensors, they ensure
                                your high-fidelity meal arrives in the exact state the chef intended.
                            </p>
                            <div className={styles.featureGrid}>
                                <div className={styles.featureItem}>
                                    <div className={styles.smallIcon}><Zap size={24} /></div>
                                    <div>
                                        <h4>High Velocity</h4>
                                        <p>Optimized route vectors</p>
                                    </div>
                                </div>
                                <div className={styles.featureItem}>
                                    <div className={styles.smallIcon}><ShieldCheck size={24} /></div>
                                    <div>
                                        <h4>Encrypted Bio</h4>
                                        <p>Secure biometric unlock</p>
                                    </div>
                                </div>
                                <div className={styles.featureItem}>
                                    <div className={styles.smallIcon}><Globe size={24} /></div>
                                    <div>
                                        <h4>Sector Wide</h4>
                                        <p>Global node coverage</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.visualColumn}>
                            <motion.div
                                className={styles.imageWrapper}
                                animate={{
                                    y: [0, -25, 0],
                                    rotate: [0, 2, 0, -2, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Image
                                    src="/delivery-pod.png"
                                    alt="Futuristic Delivery Pod"
                                    width={400}
                                    height={400}
                                    className={styles.podImage}
                                />
                                <div className={styles.imageGlow} />
                            </motion.div>
                            <div className={styles.podShadow} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HowItWorksPage;

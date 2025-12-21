'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../legal.module.css';

const PrivacyPage = () => {
    return (
        <div className={styles.legalPage}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${styles.content} glass`}
                >
                    <motion.h1
                        className="text-gradient"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        Privacy Guard
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Last Updated: December 21, 2025
                    </motion.p>

                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.3
                                }
                            }
                        }}
                    >
                        <motion.section variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                            <h2>1. Data Localization</h2>
                            <p>Your data is stored within decentralized encrypted nodes. We prioritize absolute anonymity where possible during order fulfillment.</p>
                        </motion.section>

                        <motion.section variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                            <h2>2. Telemetry Usage</h2>
                            <p>We collect minimal telemetry data solely to optimize delivery pods and system performance. We do not sell user data to external entities.</p>
                        </motion.section>

                        <motion.section variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                            <h2>3. Encryption Standards</h2>
                            <p>All personal identification data is processed using quantum-resistant encryption algorithms during transit and at rest.</p>
                        </motion.section>

                        <motion.section variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                            <h2>4. Node Rights</h2>
                            <p>You have the right to request a complete purge of your data profile at any time. This can be initiated through the User Dashboard settings.</p>
                        </motion.section>

                        <motion.ul variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                            <li>End-to-end encryption for all messages.</li>
                            <li>Zero-log policy for browsing activity.</li>
                            <li>Verified biometric auth support.</li>
                        </motion.ul>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPage;

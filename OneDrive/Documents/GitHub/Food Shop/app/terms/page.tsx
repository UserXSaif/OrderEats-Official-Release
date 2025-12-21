'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../legal.module.css';

const TermsPage = () => {
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
                        Terms of Protocol
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
                            <h2>1. Protocol Acceptance</h2>
                            <p>By accessing the OrderEats network, you agree to abide by the security and operational standards defined in this document.</p>
                        </motion.section>

                        <motion.section variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                            <h2>2. User Identification</h2>
                            <p>Users are responsible for maintaining the confidentiality of their session keys and account data. Any breach must be reported to the Communication Node immediately.</p>
                        </motion.section>

                        <motion.section variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                            <h2>3. Culinary Standards</h2>
                            <p>All meals delivered through the Protocol must meet the Silicon Valley Grade quality requirements. Chefs are independent nodes responsible for their own kitchen environments.</p>
                        </motion.section>

                        <motion.section variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                            <h2>4. Termination</h2>
                            <p>The Protocol reserves the right to terminate session access for any node exhibiting malicious behavior or non-compliance with community karma standards.</p>
                        </motion.section>

                        <motion.ul variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                            <li>Must be 18+ to utilize the network.</li>
                            <li>Payments are processed through quantum-encrypted tunnels.</li>
                            <li>Refunds are subject to the Resolution Node assessment.</li>
                        </motion.ul>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsPage;

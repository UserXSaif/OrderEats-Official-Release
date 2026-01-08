'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import styles from './chefs.module.css';

const chefs = [
    {
        id: 'CHEF-X103',
        name: 'Monir',
        specialty: 'Molecular Fusion',
        rating: 4.9,
        deliveries: '1.2k+',
        experience: '12 Years',
        avatar: '👨‍🍳'
    },
    {
        id: 'CHEF-T1017',
        name: 'Tahid',
        specialty: 'Organic Synthetics',
        rating: 4.8,
        deliveries: '850+',
        experience: '8 Years',
        avatar: '👨‍🔬'
    },
    {
        id: 'CHEF-M2764',
        name: 'Mahmud',
        specialty: 'Cyber Pastry',
        rating: 4.7,
        deliveries: '2.1k+',
        experience: '15 Years',
        avatar: '👨‍🍳'
    },
    {
        id: 'CHEF-S1088',
        name: 'Sifat',
        specialty: 'Pulse Pasta Engineering',
        rating: 4.6,
        deliveries: '420+',
        experience: '5 Years',
        avatar: '👨‍💻'
    }
];

const ChefsPage = () => {
    return (
        <div className={styles.chefsPage}>
            <div className="container">
                <div className={styles.header}>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-gradient"
                    >
                        Elite Chef Network
                    </motion.h1>
                    <p>Decentralized culinary engineers calibrated for excellence.</p>
                </div>

                <div className={styles.chefGrid}>
                    {chefs.map((chef, i) => (
                        <motion.div
                            key={chef.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`${styles.chefCard} glass`}
                        >
                            <div className={styles.avatar}>
                                {chef.avatar}
                            </div>
                            <div className={styles.chefInfo}>
                                <div className={styles.specialty}>{chef.specialty}</div>
                                <h3>{chef.name}</h3>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.3rem', color: 'var(--accent)' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill={i < Math.floor(chef.rating) ? 'currentColor' : 'none'} />
                                    ))}
                                </div>
                            </div>

                            <div className={styles.stats}>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>{chef.experience}</span>
                                    <span className={styles.statLabel}>Exp</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>{chef.deliveries}</span>
                                    <span className={styles.statLabel}>Orders</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>{chef.rating}</span>
                                    <span className={styles.statLabel}>Rating</span>
                                </div>
                            </div>

                            <button className={styles.viewBtn}>
                                Project Profile
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChefsPage;

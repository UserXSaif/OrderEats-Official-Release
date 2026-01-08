'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User as UserIcon, Package, Settings, LogOut, Clock, Zap } from 'lucide-react';
import { AuthService, User } from '@/lib/auth-service';
import { useRouter } from 'next/navigation';
import styles from './dashboard.module.css';

const DashboardPage = () => {
    const [user] = useState<User | null>(() => {
        if (typeof window !== 'undefined') {
            return AuthService.getCurrentUser();
        }
        return null;
    });
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined' && !AuthService.getCurrentUser()) {
            router.push('/login');
        }
    }, [router]);

    if (!user) return null;

    return (
        <div className={styles.dashboardPage}>
            <div className="container">
                <div className={styles.welcomeSection}>
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-gradient"
                    >
                        Welcome Back, {user.name}
                    </motion.h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Status: Active Protocol Member • ID: {user.id}</p>
                </div>

                <div className={styles.grid}>
                    <aside className={styles.sidebar}>
                        <button className={`${styles.navBtn} ${styles.activeNav}`}>
                            <Package size={20} />
                            Orders
                        </button>
                        <button className={styles.navBtn}>
                            <UserIcon size={20} />
                            Profile
                        </button>
                        <button className={styles.navBtn}>
                            <Settings size={20} />
                            Settings
                        </button>
                        <button
                            className={styles.navBtn}
                            onClick={() => { AuthService.logout(); router.push('/'); router.refresh(); }}
                            style={{ marginTop: 'auto', border: '1px solid rgba(239, 68, 68, 0.2)', color: '#ef4444' }}
                        >
                            <LogOut size={20} />
                            Terminate Session
                        </button>
                    </aside>

                    <main className={styles.content}>
                        <div className={styles.statsGrid}>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
                                className={`${styles.statCard} glass`}
                            >
                                <div className={styles.statValue}>12</div>
                                <div className={styles.statLabel}>Total Syncs</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
                                className={`${styles.statCard} glass`}
                            >
                                <div className={styles.statValue}>$284</div>
                                <div className={styles.statLabel}>Value Exchanged</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
                                className={`${styles.statCard} glass`}
                            >
                                <div className={styles.statValue}>4.9/5</div>
                                <div className={styles.statLabel}>Karma Level</div>
                            </motion.div>
                        </div>

                        <div className={`${styles.orderList} glass`}>
                            <h3 style={{ marginBottom: '2rem' }}>Recent Order Records</h3>
                            {[
                                { id: '#OE-982134', status: 'Delivered', date: '2025-12-18', total: '$42.50' },
                                { id: '#OE-881022', status: 'Delivered', date: '2025-12-15', total: '$18.75' },
                                { id: '#OE-772190', status: 'Delivered', date: '2025-12-10', total: '$124.30' }
                            ].map((order, i) => (
                                <motion.div
                                    key={order.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className={styles.orderItem}
                                >
                                    <div className={styles.orderInfo}>
                                        <h4>{order.id}</h4>
                                        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={12} /> {order.date}</span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Zap size={12} /> {order.total}</span>
                                        </div>
                                    </div>
                                    <span className={styles.status}>{order.status}</span>
                                </motion.div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;

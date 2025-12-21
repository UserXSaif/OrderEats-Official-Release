'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Package, Truck, CheckCircle2, MapPin, Clock } from 'lucide-react';
import styles from './track.module.css';

const TrackOrderPage = () => {
    const [orderId, setOrderId] = useState('');
    const [status, setStatus] = useState<any>(null);

    const handleTrack = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate tracking data
        setStatus({
            id: orderId,
            currentStatus: 'In Transit',
            steps: [
                { title: 'Order Received', time: '10:30 AM', completed: true },
                { title: 'Preparing Food', time: '10:45 AM', completed: true },
                { title: 'Out for Delivery', time: '11:15 AM', completed: true },
                { title: 'In Transit', time: '11:20 AM', completed: false },
            ],
            location: 'Sector 5, Silicon Valley',
            eta: '11:45 AM'
        });
    };

    return (
        <div className={styles.trackPage}>
            <div className="container">
                <div className={styles.header}>
                    <h1 className="text-gradient">Sector Tracking</h1>
                    <p>Enter your order identification code to localize your delivery.</p>
                </div>

                <form onSubmit={handleTrack} className={`${styles.searchBox} glass`}>
                    <Search className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Enter Order ID (e.g. #OE-123456)"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        required
                    />
                    <button type="submit">Localize</button>
                </form>

                {status && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={styles.result}
                    >
                        <div className={styles.statusGrid}>
                            <div className={`${styles.mainStatus} glass`}>
                                <div className={styles.statusHeader}>
                                    <Package size={40} color="var(--primary)" />
                                    <div>
                                        <h2>Order Status: {status.currentStatus}</h2>
                                        <span>ID: {status.id}</span>
                                    </div>
                                </div>

                                <div className={styles.timeline}>
                                    {status.steps.map((step: any, i: number) => (
                                        <div key={i} className={`${styles.timelineStep} ${step.completed ? styles.completed : ''}`}>
                                            <div className={styles.dot}>
                                                {step.completed && <CheckCircle2 size={16} />}
                                            </div>
                                            <div className={styles.stepInfo}>
                                                <h3>{step.title}</h3>
                                                <span>{step.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={`${styles.metaInfo} glass`}>
                                <div className={styles.infoItem}>
                                    <MapPin size={24} color="var(--accent)" />
                                    <div>
                                        <span>Current Sector</span>
                                        <strong>{status.location}</strong>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <Clock size={24} color="var(--primary)" />
                                    <div>
                                        <span>Estimated Sync</span>
                                        <strong>{status.eta}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default TrackOrderPage;

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import styles from './contact.module.css';

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className={styles.contactPage}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`${styles.success} glass`}
                    >
                        <h1 className="text-gradient">Message Encrypted</h1>
                        <p>Your communication has been successfully transmitted to the Protocol Hub.</p>
                        <button
                            className={styles.submitBtn}
                            onClick={() => setSubmitted(false)}
                            style={{ margin: '2rem auto 0' }}
                        >
                            Send Another Transmission
                        </button>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.contactPage}>
            <div className="container">
                <div className={styles.header}>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gradient"
                    >
                        Communication Hub
                    </motion.h1>
                    <p>Establish a secure link with the OrderEats administrative layer.</p>
                </div>

                <div className={styles.grid}>
                    <div className={`${styles.infoCard} glass`}>
                        <div className={styles.infoItem}>
                            <div className={styles.icon}><Mail size={24} /></div>
                            <div className={styles.infoText}>
                                <h4>Data Stream</h4>
                                <p>protocol@ordereats.ai</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.icon}><Phone size={24} /></div>
                            <div className={styles.infoText}>
                                <h4>Voice Link</h4>
                                <p>+880 1234-ORDER-EATS</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.icon}><MapPin size={24} /></div>
                            <div className={styles.infoText}>
                                <h4>Physical Node</h4>
                                <p>Sector 7, Silicon Valley Complex, Dhaka</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.icon}><MessageSquare size={24} /></div>
                            <div className={styles.infoText}>
                                <h4>Instant Sync</h4>
                                <p>Available in Live Chat Widget 24/7</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.formCard} glass`}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label>Subject Identity</label>
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Return Address</label>
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Communication Topic</label>
                                <input type="text" placeholder="Subject" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Transmission Data</label>
                                <textarea rows={5} placeholder="Your Message..." required></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn}>
                                <span>Transmit Message</span>
                                <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

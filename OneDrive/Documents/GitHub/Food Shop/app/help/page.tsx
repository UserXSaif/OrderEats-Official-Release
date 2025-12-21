'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Book, MessageCircle, ShieldQuestion, ArrowRight } from 'lucide-react';
import styles from './help.module.css';

const helpTopics = [
    {
        title: 'Order Tracking',
        description: 'Learn how to monitor your delivery pods in real-time across urban sectors.',
        icon: HelpCircle
    },
    {
        title: 'Payment Security',
        description: 'Understand how our quantum encryption protects your financial exchanges.',
        icon: ShieldQuestion
    },
    {
        title: 'Chef Certification',
        description: 'Detailed information on our elite culinary engineer verification protocol.',
        icon: Book
    },
    {
        title: 'Live Assistance',
        description: 'Connect with a Support Agent for immediate synchronization adjustments.',
        icon: MessageCircle
    }
];

const HelpPage = () => {
    return (
        <div className={styles.helpPage}>
            <div className="container">
                <div className={styles.header}>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-gradient"
                    >
                        Central Help Hub
                    </motion.h1>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
                        Providing clear resolution paths for the OrderEats ecosystem.
                    </p>
                </div>

                <motion.div
                    className={styles.grid}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    {helpTopics.map((topic, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0 }
                            }}
                            className={`${styles.helpCard} glass`}
                        >
                            <div className={styles.icon}>
                                <topic.icon size={28} />
                            </div>
                            <h3>{topic.title}</h3>
                            <p>{topic.description}</p>
                            <button className={styles.actionBtn}>
                                <span>Access Node</span>
                                <ArrowRight size={16} />
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default HelpPage;

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Headset } from 'lucide-react';
import styles from './ChatWidget.module.css';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([
        { role: 'support', text: 'Greeting prioritized. How can I assist with your culinary synchronization today?' }
    ]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!message) return;

        const newChat = [...chat, { role: 'user', text: message }];
        setChat(newChat);
        setMessage('');

        // Simulate reply
        setTimeout(() => {
            setChat(prev => [...prev, {
                role: 'support',
                text: 'Order status received. Analyzing delivery vectors...'
            }]);
        }, 1500);
    };

    return (
        <div className={styles.widgetContainer}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className={`${styles.chatBox} glass`}
                    >
                        <div className={styles.header}>
                            <div className={styles.supportInfo}>
                                <div className={styles.avatar}>
                                    <Headset size={20} />
                                </div>
                                <div className={styles.status}>
                                    <h3>OrderEats Support</h3>
                                    <span>Online - Sector 7</span>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
                        </div>

                        <div className={styles.messages}>
                            {chat.map((msg, i) => (
                                <div key={i} className={`${styles.message} ${styles[msg.role]}`}>
                                    <div className={styles.bubble}>{msg.text}</div>
                                </div>
                            ))}
                        </div>

                        <form onSubmit={handleSend} className={styles.inputArea}>
                            <input
                                type="text"
                                placeholder="Transmission..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button type="submit"><Send size={18} /></button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.toggleBtn}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X /> : <MessageSquare />}
            </motion.button>
        </div>
    );
};

export default ChatWidget;

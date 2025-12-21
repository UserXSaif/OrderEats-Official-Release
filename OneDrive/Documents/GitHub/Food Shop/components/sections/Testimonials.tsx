'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Testimonials.module.css';

interface Testimonial {
    id: number;
    text: string;
    author: string;
    date: string;
    rating: number;
    avatar: string;
}

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch('/api/testimonials')
            .then((res) => res.json())
            .then((data) => setTestimonials(data));
    }, []);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    if (testimonials.length === 0) return null;

    return (
        <section className={styles.testimonials}>
            <div className={`${styles.container} container`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Network <span className="text-gradient">Feedback</span></h2>
                    <p>Verified culinary experiences from our global decentralized community.</p>
                </div>

                <div className={styles.carouselWrapper}>
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: 'var(--primary-glow)' }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prev}
                        className={styles.navBtn}
                    >
                        <ChevronLeft size={24} />
                    </motion.button>

                    <div className={styles.cardContainer}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className={`${styles.testimonialCard} glass`}
                            >
                                <Quote className={styles.quoteIcon} size={40} />
                                <p className={styles.text}>{testimonials[currentIndex].text}</p>
                                <div className={styles.footer}>
                                    <div className={styles.authorGroup}>
                                        <div className={styles.avatar}>{testimonials[currentIndex].avatar}</div>
                                        <div className={styles.info}>
                                            <h4>{testimonials[currentIndex].author}</h4>
                                            <p>{testimonials[currentIndex].date}</p>
                                        </div>
                                    </div>
                                    <div className={styles.rating}>
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                fill={i < testimonials[currentIndex].rating ? "var(--primary)" : "none"}
                                                color={i < testimonials[currentIndex].rating ? "var(--primary)" : "var(--text-muted)"}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: 'var(--primary-glow)' }}
                        whileTap={{ scale: 0.9 }}
                        onClick={next}
                        className={styles.navBtn}
                    >
                        <ChevronRight size={24} />
                    </motion.button>
                </div>

                <div className={styles.dots}>
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${i === currentIndex ? styles.activeDot : ''}`}
                            onClick={() => setCurrentIndex(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

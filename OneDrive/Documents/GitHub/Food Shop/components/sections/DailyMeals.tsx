'use client';

import React, { useEffect, useState } from 'react';
import { User, MapPin, Star, ShoppingCart, Check } from 'lucide-react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { MealService, Meal } from '@/lib/services/meal-service';
import { useCart } from '@/lib/cart-context';
import styles from './DailyMeals.module.css';

const DailyMeals = () => {
    const [meals, setMeals] = useState<Meal[]>([]);
    const [loading, setLoading] = useState(true);
    const [addedId, setAddedId] = useState<number | null>(null);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchMeals = async () => {
            const data = await MealService.getDailyMeals();
            setMeals(data);
            setLoading(false);
        };
        fetchMeals();
    }, []);

    const handleAddToCart = (meal: Meal) => {
        addToCart(meal);
        setAddedId(meal.id);
        setTimeout(() => setAddedId(null), 2000);
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
        }
    };

    if (loading) {
        return (
            <section className={styles.dailyMeals}>
                <div className="container">
                    <div className={styles.loadingGrid}>
                        {[1, 2, 3].map((i) => (
                            <div key={i} className={`${styles.skeleton} glass`} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.dailyMeals}>
            <div className={`${styles.container} container`}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className={styles.header}
                >
                    <span className={styles.preTitle}>CHEF CURATED</span>
                    <h2 className={styles.title}>Daily Fusion <span className="text-gradient">Innovations</span></h2>
                    <p>Real-time availability from our top-rated local culinary engineers.</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className={styles.grid}
                >
                    {meals.map((meal) => (
                        <motion.div
                            key={meal.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className={`${styles.card} glass`}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={meal.image}
                                    alt={meal.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className={styles.mealImage}
                                />
                                <div className={styles.categoryBadge}>{meal.category || 'Entrée'}</div>
                                <div className={styles.priceBadge}>${meal.price}</div>
                            </div>

                            <div className={styles.cardContent}>
                                <div className={styles.topRow}>
                                    <h3 className={styles.mealName}>{meal.name}</h3>
                                    <div className={styles.rating}>
                                        <Star size={14} fill="var(--primary)" color="var(--primary)" />
                                        <span>{meal.rating}</span>
                                    </div>
                                </div>

                                <div className={styles.meta}>
                                    <div className={styles.metaItem}>
                                        <User size={14} color="var(--primary)" />
                                        <span>{meal.chef}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <MapPin size={14} color="var(--primary)" />
                                        <span>{meal.area}</span>
                                    </div>
                                </div>

                                <button
                                    className={`${styles.detailsBtn} ${addedId === meal.id ? styles.added : ''}`}
                                    onClick={() => handleAddToCart(meal)}
                                    disabled={addedId === meal.id}
                                >
                                    {addedId === meal.id ? (
                                        <>
                                            <Check size={18} />
                                            <span>Synthesized</span>
                                        </>
                                    ) : (
                                        <>
                                            <ShoppingCart size={18} />
                                            <span>Deploy to Cart</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default DailyMeals;

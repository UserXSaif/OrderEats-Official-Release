'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, Check, Star } from 'lucide-react';
import { MealService, Meal } from '@/lib/services/meal-service';
import { useCart } from '@/lib/cart-context';
import Image from 'next/image';
import styles from './meals.module.css';

const ExplorePage = () => {
    const [meals, setMeals] = useState<Meal[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
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

    const categories = ['All', ...new Set(meals.map(m => m.category))];

    const filteredMeals = meals.filter(meal => {
        const matchesSearch = meal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            meal.chef.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || meal.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleAddToCart = (meal: Meal) => {
        addToCart(meal);
        setAddedId(meal.id);
        setTimeout(() => setAddedId(null), 2000);
    };

    if (loading) {
        return (
            <div className={styles.explorePage}>
                <div className="container" style={{ textAlign: 'center', paddingTop: '100px' }}>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        style={{ display: 'inline-block', marginBottom: '2rem' }}
                    >
                        <ShoppingCart size={40} color="var(--primary)" />
                    </motion.div>
                    <h2 className="text-gradient">Initializing Culinary Grid...</h2>
                    <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Synchronizing with elite kitchen nodes</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.explorePage}>
            <div className="container">
                <div className={styles.header}>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gradient"
                    >
                        Explore the Protocol
                    </motion.h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Access our decentralized network of elite culinary engineers.</p>
                </div>

                <div className={styles.filterSection}>
                    <div className={`${styles.filterBar} glass`}>
                        <div className={styles.searchWrapper}>
                            <Search className={styles.searchIcon} size={20} />
                            <input
                                type="text"
                                placeholder="Locate dish, chef or cuisine..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.categories}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`${styles.categoryBtn} ${selectedCategory === cat ? styles.activeCategory : ''}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.mealGrid}>
                    <AnimatePresence mode="popLayout">
                        {filteredMeals.map((meal) => (
                            <motion.div
                                key={meal.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
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
                                    <div className={styles.categoryBadge}>{meal.category}</div>
                                    <div className={styles.priceBadge}>${meal.price}</div>
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.mealHeader}>
                                        <h3>{meal.name}</h3>
                                        <div className={styles.rating}>
                                            <Star size={14} fill="var(--primary)" color="var(--primary)" />
                                            <span>{meal.rating}</span>
                                        </div>
                                    </div>
                                    <p className={styles.chefInfo}>
                                        By {meal.chef} • <span style={{ color: 'var(--primary)' }}>{meal.area}</span>
                                    </p>

                                    <button
                                        className={`${styles.addBtn} ${addedId === meal.id ? styles.added : ''}`}
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
                    </AnimatePresence>
                </div>

                {filteredMeals.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={styles.empty}
                    >
                        <h3>No dishes localized in this sector.</h3>
                        <p>Try adjusting your search parameters to find available nodes.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ExplorePage;

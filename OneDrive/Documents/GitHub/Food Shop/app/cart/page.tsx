'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import styles from './cart.module.css';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, total } = useCart();

    if (cart.length === 0) {
        return (
            <div className={styles.emptyCart}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass"
                    style={{ padding: '4rem', textAlign: 'center' }}
                >
                    <ShoppingBag size={80} style={{ color: 'var(--text-muted)', marginBottom: '2rem' }} />
                    <h2 className="text-gradient">Your cart is empty</h2>
                    <p style={{ color: 'var(--text-secondary)', margin: '1rem 0 2rem' }}>
                        Browse our chef-curated menus to find your next favorite meal.
                    </p>
                    <Link href="/meals" className={styles.browseBtn}>
                        Explore Menus
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className={styles.cartPage}>
            <div className="container">
                <h1 className="text-gradient" style={{ marginBottom: '3rem' }}>Your Cart</h1>

                <div className={styles.layout}>
                    <div className={styles.itemsList}>
                        <AnimatePresence>
                            {cart.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className={`${styles.cartItem} glass`}
                                >
                                    <div className={styles.itemImage}>
                                        <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className={styles.itemInfo}>
                                        <h3>{item.name}</h3>
                                        <p className={styles.price}>${item.price}</p>
                                    </div>
                                    <div className={styles.quantityControls}>
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={16} /></button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={16} /></button>
                                    </div>
                                    <div className={styles.itemTotal}>
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                    <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>
                                        <Trash2 size={20} />
                                    </button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className={styles.summary}>
                        <div className="glass" style={{ padding: '2rem' }}>
                            <h2 style={{ marginBottom: '1.5rem' }}>Order Summary</h2>
                            <div className={styles.summaryRow}>
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Delivery</span>
                                <span style={{ color: 'var(--primary)' }}>FREE</span>
                            </div>
                            <div className={`${styles.summaryRow} ${styles.total}`}>
                                <span>Total</span>
                                <span className="text-gradient">${total.toFixed(2)}</span>
                            </div>
                            <Link href="/checkout" className={styles.checkoutBtn}>
                                Proceed to Checkout
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { MapPin, CreditCard, Banknote, Smartphone, Gift, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import styles from './checkout.module.css';

const CheckoutPage = () => {
    const { cart, total, clearCart } = useCart();
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [address, setAddress] = useState({ street: '', city: '', phone: '' });
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [voucher, setVoucher] = useState('');
    const [discount, setDiscount] = useState(0);

    const handlePlaceOrder = () => {
        setStep(3);
        setTimeout(() => {
            clearCart();
            router.push('/');
        }, 5000);
    };

    const applyVoucher = () => {
        if (voucher.toUpperCase() === 'OREATS20') {
            setDiscount(total * 0.2);
            alert('Voucher applied: 20% Discount!');
        } else {
            alert('Invalid voucher code');
        }
    };

    if (cart.length === 0 && step !== 3) {
        router.push('/cart');
        return null;
    }

    return (
        <div className={styles.checkoutPage}>
            <div className="container">
                <div className={styles.stepper}>
                    <div className={`${styles.step} ${step >= 1 ? styles.active : ''}`}>Address</div>
                    <div className={`${styles.divider}`} />
                    <div className={`${styles.step} ${step >= 2 ? styles.active : ''}`}>Payment</div>
                    <div className={`${styles.divider}`} />
                    <div className={`${styles.step} ${step >= 3 ? styles.active : ''}`}>Confirm</div>
                </div>

                {step === 1 && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`${styles.card} glass`}>
                        <h2 className="text-gradient"><MapPin size={24} /> Delivery Address</h2>
                        <div className={styles.form}>
                            <input
                                type="text"
                                placeholder="Street Address"
                                value={address.street}
                                onChange={(e) => setAddress({ ...address, street: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="City"
                                value={address.city}
                                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                value={address.phone}
                                onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                            />
                            <button className={styles.primaryBtn} onClick={() => setStep(2)}>
                                Next to Payment <ArrowRight size={20} />
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={styles.paymentSection}>
                        <div className={`${styles.card} glass`}>
                            <h2 className="text-gradient"><CreditCard size={24} /> Choose Payment Method</h2>
                            <div className={styles.paymentGrid}>
                                {[
                                    { id: 'card', name: 'Credit/Debit Card', icon: <CreditCard /> },
                                    { id: 'bank', name: 'Bank Transfer', icon: <Banknote /> },
                                    { id: 'bkash', name: 'bKash', icon: <Smartphone color="#E2136E" /> },
                                    { id: 'nagad', name: 'Nagad', icon: <Smartphone color="#F7941D" /> },
                                    { id: 'cod', name: 'Cash on Delivery', icon: <Banknote /> },
                                ].map((method) => (
                                    <button
                                        key={method.id}
                                        className={`${styles.paymentBtn} ${paymentMethod === method.id ? styles.selected : ''}`}
                                        onClick={() => setPaymentMethod(method.id)}
                                    >
                                        {method.icon}
                                        <span>{method.name}</span>
                                    </button>
                                ))}
                            </div>

                            <div className={styles.voucherSection}>
                                <div className={styles.voucherInput}>
                                    <Gift size={20} />
                                    <input
                                        type="text"
                                        placeholder="Voucher Code (Try: OREATS20)"
                                        value={voucher}
                                        onChange={(e) => setVoucher(e.target.value)}
                                    />
                                    <button onClick={applyVoucher}>Apply</button>
                                </div>
                            </div>

                            <div className={styles.orderSummary}>
                                <div className={styles.summaryRow}>
                                    <span>Subtotal</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                {discount > 0 && (
                                    <div className={styles.summaryRow} style={{ color: 'var(--primary)' }}>
                                        <span>Discount</span>
                                        <span>-${discount.toFixed(2)}</span>
                                    </div>
                                )}
                                <div className={`${styles.summaryRow} ${styles.total}`}>
                                    <span>Amount Payable</span>
                                    <span className="text-gradient">${(total - discount).toFixed(2)}</span>
                                </div>
                            </div>

                            <button className={styles.primaryBtn} onClick={handlePlaceOrder}>
                                Complete Order <CheckCircle2 size={20} />
                            </button>
                            <button className={styles.backBtn} onClick={() => setStep(1)}>Back</button>
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <div className={styles.success}>
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="glass"
                            style={{ padding: '4rem', textAlign: 'center' }}
                        >
                            <CheckCircle2 size={100} color="var(--primary)" style={{ marginBottom: '2rem' }} />
                            <h1 className="text-gradient">Order Synchronized!</h1>
                            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
                                Your order has been registered in the Protocol.
                                <br />Tracking ID: #OE-{Math.floor(Math.random() * 999999)}
                            </p>
                            <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                Redirecting to Sector Grid...
                            </p>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutPage;

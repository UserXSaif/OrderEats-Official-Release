'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Lock, User as UserIcon, ArrowRight, Github } from 'lucide-react';
import { AuthService } from '@/lib/auth-service';
import styles from '@/app/Auth.module.css';

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await AuthService.signup(name, email, password);
            router.push('/');
            router.refresh();
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.authPage}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`${styles.authCard} glass`}
            >
                <div className={styles.header}>
                    <h1 className="text-gradient">Create Account</h1>
                    <p>Join the OrderEats community</p>
                </div>

                {error && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={styles.error}
                    >
                        {error}
                    </motion.div>
                )}

                <form onSubmit={handleSignUp} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <UserIcon className={styles.icon} size={20} />
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <Mail className={styles.icon} size={20} />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <Lock className={styles.icon} size={20} />
                        <input
                            type="password"
                            placeholder="Password (min 6 chars)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={loading}>
                        {loading ? (
                            <span className={styles.spinner} />
                        ) : (
                            <>
                                <span>Create Account</span>
                                <ArrowRight size={20} />
                            </>
                        )}
                    </button>
                </form>

                <div className={styles.divider}>
                    <span>OR CONTINUE WITH</span>
                </div>

                <div className={styles.socials}>
                    <button className={styles.socialBtn}>
                        <Github size={20} />
                        <span>GitHub</span>
                    </button>
                </div>

                <p className={styles.footer}>
                    Already have an account? <Link href="/login">Sign In</Link>
                </p>
            </motion.div>
        </div>
    );
};

export default SignUpPage;

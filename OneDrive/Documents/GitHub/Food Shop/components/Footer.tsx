'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: 'Navigation',
            links: [
                { name: 'Home', href: '/' },
                { name: 'Browse Meals', href: '/meals' },
                { name: 'Our Chefs', href: '/chefs' },
                { name: 'How it Works', href: '/how-it-works' },
            ]
        },
        {
            title: 'Support',
            links: [
                { name: 'Help Center', href: '/help' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
            ]
        }
    ];

    return (
        <footer className={styles.footer}>
            <div className={`${styles.container} container`}>
                <div className={styles.topSection}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <span className="text-gradient">OrderEats</span>
                            <span className={styles.logoSub}>BY PROTOCOL</span>
                        </Link>
                        <p className={styles.tagline}>
                            The future of flavor, synchronized to your doorstep. Powered by Silicon Valley grade culinary engineering.
                        </p>
                        <div className={styles.socials}>
                            {[Facebook, Github, Linkedin, Twitter].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, color: 'var(--primary)' }}
                                    className={styles.socialIcon}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div className={styles.linksGrid}>
                        {footerLinks.map((group) => (
                            <div key={group.title} className={styles.linkGroup}>
                                <h3>{group.title}</h3>
                                <ul>
                                    {group.links.map((link) => (
                                        <li key={link.name}>
                                            <Link href={link.href}>
                                                {link.name}
                                                <ArrowUpRight size={14} className={styles.arrow} />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className={styles.newsletter}>
                            <h3>Stay Updated</h3>
                            <p>Join our elite circle of food enthusiasts.</p>
                            <form className={styles.form}>
                                <input type="email" placeholder="Email Address" />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p>© {currentYear} OrderEats. Engineered for Excellence.</p>
                    <div className={styles.stats}>
                        <span>1.2k+ Active Chefs</span>
                        <span className={styles.dot}>•</span>
                        <span>98.4% Satisfaction</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

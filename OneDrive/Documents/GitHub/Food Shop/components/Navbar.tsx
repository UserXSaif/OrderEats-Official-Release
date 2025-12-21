'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, LogOut, ShoppingBag, Search, ShoppingCart } from 'lucide-react';
import { AuthService } from '@/lib/auth-service';
import { useCart } from '@/lib/cart-context';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  const { cart } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // Check for user on mount and after pathname change (simple sync)
    const currentUser = AuthService.getCurrentUser();
    setUser(currentUser);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleLogout = () => {
    AuthService.logout();
    setUser(null);
    window.location.href = '/';
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore', href: '/meals' },
    { name: 'Chefs', href: '/chefs' },
    { name: 'Track Order', href: '/orders/track' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logo}>
          <motion.div
            animate={{
              rotateY: [0, 360],
              filter: ["drop-shadow(0 0 5px var(--primary-glow))", "drop-shadow(0 0 15px var(--primary-glow))", "drop-shadow(0 0 5px var(--primary-glow))"]
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className={styles.logoIcon}
          >
            <ShoppingBag className={styles.bagIcon} size={28} />
          </motion.div>
          <div className={styles.logoText}>
            <span className="text-gradient">OrderEats</span>
            <span className={styles.logoVersion}>PROTOCOL v4.1 // CORE</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="underline"
                  className={styles.underline}
                />
              )}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Search">
            <Search size={20} />
          </button>

          <Link href="/cart" className={styles.cartIconBtn} aria-label="Cart">
            <ShoppingCart size={20} />
            {cart.length > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={styles.cartBadge}
              >
                {cart.length}
              </motion.span>
            )}
          </Link>

          {user ? (
            <div className={styles.userSection}>
              <Link href="/dashboard" className={styles.profileLink}>
                <User size={18} />
                <span>{user.name.split(' ')[0]}</span>
              </Link>
              <button onClick={handleLogout} className={styles.logoutBtn} aria-label="Logout">
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <Link href="/login" className={styles.loginBtn}>
              <User size={18} />
              <span>Login</span>
            </Link>
          )}

          <button
            className={styles.menuToggle}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.mobileNav}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <>
                <Link href="/dashboard" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>
                  Dashboard
                </Link>
                <button onClick={handleLogout} className={styles.mobileLoginBtn}>
                  Log Out
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className={styles.mobileLoginBtn}
                onClick={() => setIsOpen(false)}
              >
                Login / Sign Up
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

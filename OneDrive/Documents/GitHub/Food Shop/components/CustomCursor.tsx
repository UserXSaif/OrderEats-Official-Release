'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button') || target.closest('a')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            scale: 1,
            backgroundColor: 'var(--primary)',
        },
        hover: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            scale: 1.5,
            backgroundColor: 'transparent',
            border: '2px solid var(--primary)',
        }
    };

    const ringVariants = {
        default: {
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            scale: 1,
        },
        hover: {
            x: mousePosition.x - 30,
            y: mousePosition.y - 30,
            scale: 1.2,
            borderColor: 'var(--primary)',
            borderWidth: '1px'
        }
    };

    return (
        <>
            <motion.div
                className="cursor-dot"
                variants={variants}
                animate={isHovered ? "hover" : "default"}
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: 12, // Slightly smaller
                    height: 12,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 10000,
                    backgroundColor: 'var(--primary)',
                    boxShadow: '0 0 15px var(--primary-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            />
            <motion.div
                className="cursor-ring"
                variants={ringVariants}
                animate={isHovered ? "hover" : "default"}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: 36, // Slightly smaller base
                    height: 36,
                    borderRadius: '50%',
                    border: '1px solid var(--primary)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    opacity: 0.5
                }}
            />
        </>
    );
};

export default CustomCursor;

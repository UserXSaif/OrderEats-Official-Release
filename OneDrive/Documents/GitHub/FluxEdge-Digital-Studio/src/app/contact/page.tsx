'use client'
import { useState, useRef } from 'react'
import styles from './contact.module.css'
import gsap from 'gsap'

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
    const [errors, setErrors] = useState<any[]>([])
    const buttonRef = useRef<HTMLButtonElement>(null)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('submitting')
        setErrors([])

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            const data = await res.json()

            if (!res.ok) {
                setErrors(data.errors || [])
                setStatus('error')
                return
            }

            if (buttonRef.current) {
                gsap.to(buttonRef.current, {
                    scale: 0.95, yoyo: true, repeat: 1, duration: 0.1,
                    onComplete: () => {
                        gsap.to(buttonRef.current, {
                            width: '100%', backgroundColor: '#00ff88', color: '#000', duration: 0.5,
                            onComplete: () => setStatus('success')
                        })
                    }
                })
            }
        } catch (err) {
            setStatus('error')
        }
    }

    return (
        <main className={`container ${styles.contactPage}`}>
            <h1 className={styles.heading}>Start a Project</h1>

            {status !== 'success' ? (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <input
                            name="name"
                            type="text"
                            className={styles.input}
                            placeholder=" "
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <label className={styles.label}>Name</label>
                    </div>

                    <div className={styles.inputGroup}>
                        <input
                            name="email"
                            type="email"
                            className={styles.input}
                            placeholder=" "
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label className={styles.label}>Email</label>
                    </div>

                    <div className={styles.inputGroup}>
                        <input
                            name="project"
                            type="text"
                            className={styles.input}
                            placeholder=" "
                            value={formData.project}
                            onChange={handleChange}
                            required
                        />
                        <label className={styles.label}>Project Details</label>
                    </div>

                    {errors.length > 0 && (
                        <div style={{ color: '#ff4444', fontSize: '0.9rem' }}>
                            {errors.map((err, i) => (
                                <p key={i}>{err.path?.[0]}: {err.message}</p>
                            ))}
                        </div>
                    )}

                    <button ref={buttonRef} type="submit" className={styles.submitBtn} disabled={status === 'submitting'}>
                        {status === 'submitting' ? 'Processing...' : 'Send Inquiry'}
                    </button>
                </form>
            ) : (
                <div style={{ textAlign: 'center', fontSize: '2rem', marginTop: '10vh', color: '#00ff88' }}>
                    <p>Transmission Received.</p>
                    <p style={{ fontSize: '1rem', marginTop: '1rem', color: '#fff', opacity: 0.6 }}>Our neural network will process your request shortly.</p>
                </div>
            )}
        </main>
    )
}

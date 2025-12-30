'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import { Lead } from '@/lib/store'

export default function Dashboard() {
    const [leads, setLeads] = useState<Lead[]>([])

    useEffect(() => {
        const fetchLeads = async () => {
            const res = await fetch('/api/leads')
            const json = await res.json()
            if (json.success) {
                setLeads(json.data)
            }
        }
        fetchLeads()
        const interval = setInterval(fetchLeads, 5000) // Poll every 5s
        return () => clearInterval(interval)
    }, [])

    return (
        <div className={styles.dashboard}>
            <h1>Mission Control</h1>

            <div className={styles.leadGrid}>
                {leads.length === 0 ? <p className={styles.empty}>No signals received yet.</p> : null}

                {leads.map(lead => (
                    <div key={lead.id} className={styles.card}>
                        <div className={styles.header}>
                            <span className={styles.id}>#{lead.id}</span>
                            <span className={styles.time}>{new Date(lead.timestamp).toLocaleTimeString()}</span>
                        </div>
                        <h3>{lead.name}</h3>
                        <p className={styles.email}>{lead.email}</p>
                        <div className={styles.project}>
                            <strong>Project Protocol:</strong>
                            <p>{lead.project}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

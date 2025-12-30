// Simple in-memory store for demonstration
// In production, this would be a real database connection (Postgres/Mongo)

export type Lead = {
    id: string
    name: string
    email: string
    project: string
    budget?: string
    timestamp: string
    status: 'new' | 'contacted'
}

class InMemoryStore {
    private leads: Lead[] = []

    addLead(lead: Omit<Lead, 'id' | 'timestamp' | 'status'>) {
        const newLead: Lead = {
            ...lead,
            id: Math.random().toString(36).substring(7),
            timestamp: new Date().toISOString(),
            status: 'new'
        }
        this.leads.unshift(newLead)
        return newLead
    }

    getLeads() {
        return this.leads
    }
}

// Singleton instance to persist across hot reloads (mostly)
export const db = new InMemoryStore()

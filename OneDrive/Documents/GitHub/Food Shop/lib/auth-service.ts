/**
 * Silicon Valley Standard AuthService
 * Simulated authentication service for OrderEats.
 */

export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
}

export class AuthService {
    private static STORAGE_KEY = 'lcb_auth_user';

    /**
     * Simulate a network delay for professional loading states.
     */
    private static async delay(ms: number = 800) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    static async login(email: string, password: string): Promise<User> {
        await this.delay();

        // Professional validation simulation
        if (!email.includes('@')) {
            throw new Error('Invalid email format');
        }

        if (password.length < 6) {
            throw new Error('Password must be at least 6 characters');
        }

        const user: User = {
            id: Math.random().toString(36).substr(2, 9),
            email,
            name: email.split('@')[0].toUpperCase(),
        };

        if (typeof window !== 'undefined') {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
        }

        return user;
    }

    static async signup(name: string, email: string, password: string): Promise<User> {
        await this.delay();

        const user = await this.login(email, password);
        return { ...user, name };
    }

    static logout() {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(this.STORAGE_KEY);
        }
    }

    static getCurrentUser(): User | null {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            return stored ? JSON.parse(stored) : null;
        }
        return null;
    }
}

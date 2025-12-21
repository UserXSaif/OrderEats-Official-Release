/**
 * Silicon Valley Standard Testimonial Service
 * Managing decentralized community feedback.
 */

export interface Testimonial {
    id: number;
    text: string;
    author: string;
    date: string;
    rating: number;
    avatar: string;
}

export class TestimonialService {
    private static async delay(ms: number = 400) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    static async getLatest(): Promise<Testimonial[]> {
        await this.delay();

        return [
            {
                id: 1,
                text: 'The nutritional profile of the Quantum Biryani is unmatched. Truly the future.',
                author: 'Alex Riv',
                date: '2025-12-17',
                rating: 5,
                avatar: '👨‍🚀'
            },
            {
                id: 2,
                text: 'Zero latency in delivery. Flavor was precision-calibrated.',
                author: 'Sarah Dev',
                date: '2025-12-18',
                rating: 5,
                avatar: '👩‍💻'
            },
            {
                id: 3,
                text: 'Efficient, elegant, and delicious. OrderEats is the new standard.',
                author: 'David Ops',
                date: '2025-12-19',
                rating: 5,
                avatar: '👨‍💼'
            }
        ];
    }
}

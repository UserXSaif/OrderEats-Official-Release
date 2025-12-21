/**
 * Silicon Valley Standard Meal Service
 * Professional-grade data management for culinary innovations.
 */

export interface Meal {
    id: number;
    name: string;
    chef: string;
    chefId: string;
    area: string;
    price: number;
    rating: number;
    image: string;
    category: string;
    available: boolean;
}

export class MealService {
    private static async delay(ms: number = 600) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    static async getDailyMeals(): Promise<Meal[]> {
        await this.delay();

        return [
            {
                id: 1,
                name: 'Quantum Biryani',
                chef: 'Monir',
                chefId: 'CHEF-X103',
                area: 'Mirpur Hub',
                price: 8.53,
                rating: 4.9,
                category: 'Fusion',
                available: true,
                image: '/images/biryani_meal_1766250364612.png'
            },
            {
                id: 2,
                name: 'Neo Garden Salad',
                chef: 'Tahid',
                chefId: 'CHEF-T1017',
                area: 'Rangpur Node',
                price: 13.99,
                rating: 4.8,
                category: 'Organic',
                available: true,
                image: '/images/hero_collage_1766250332911.png'
            },
            {
                id: 3,
                name: 'Cyber Citrus Tart',
                chef: 'Mahmud',
                chefId: 'CHEF-M2764',
                area: 'Dinajpur Lab',
                price: 18.75,
                rating: 4.7,
                category: 'Dessert',
                available: true,
                image: '/images/hero_bread_1766250348212.png'
            },
            {
                id: 4,
                name: 'Pulse Pasta Alpha',
                chef: 'Sifat',
                chefId: 'CHEF-S1088',
                area: 'Dhaka Sector 12',
                price: 12.50,
                rating: 4.6,
                category: 'Pasta',
                available: true,
                image: '/images/hero_collage_1766250332911.png'
            },
            {
                id: 5,
                name: 'Glitch Curry v3',
                chef: 'Arif',
                chefId: 'CHEF-A992',
                area: 'Sylhet Node',
                price: 15.99,
                rating: 4.9,
                category: 'Fusion',
                available: true,
                image: '/images/biryani_meal_1766250364612.png'
            },
            {
                id: 6,
                name: 'Bio-Organic Tacos',
                chef: 'Zayan',
                chefId: 'CHEF-Z202',
                area: 'Chittagong Port',
                price: 9.99,
                rating: 4.5,
                category: 'Organic',
                available: true,
                image: '/images/hero_bread_1766250348212.png'
            }
        ];
    }
}

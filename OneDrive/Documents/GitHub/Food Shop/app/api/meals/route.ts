import { NextResponse } from 'next/server';
import { MealService } from '@/lib/services/meal-service';

export async function GET() {
    try {
        const meals = await MealService.getDailyMeals();
        return NextResponse.json(meals);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch meals' }, { status: 500 });
    }
}

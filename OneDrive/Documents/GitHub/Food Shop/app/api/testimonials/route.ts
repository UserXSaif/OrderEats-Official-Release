import { NextResponse } from 'next/server';
import { TestimonialService } from '@/lib/services/testimonial-service';

export async function GET() {
    try {
        const testimonials = await TestimonialService.getLatest();
        return NextResponse.json(testimonials);
    } catch {
        return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
    }
}

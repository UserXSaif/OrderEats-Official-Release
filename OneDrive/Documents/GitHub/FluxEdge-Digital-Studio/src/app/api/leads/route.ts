import { NextResponse } from 'next/server'
import { db } from '@/lib/store'
import { ApiResponse } from '@/lib/api-response'

export async function GET() {
    const leads = db.getLeads()
    return ApiResponse.success(leads, 'Leads retrieved successfully')
}

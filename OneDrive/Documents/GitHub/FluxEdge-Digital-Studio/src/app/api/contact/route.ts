import { NextRequest } from 'next/server'
import { contactController } from '@/controllers/contact.controller'

export async function POST(req: NextRequest) {
    return contactController.submit(req)
}

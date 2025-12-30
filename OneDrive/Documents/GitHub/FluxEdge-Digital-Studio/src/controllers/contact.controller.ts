import { NextRequest } from 'next/server'
import { contactSchema } from '@/lib/validations/contact'
import { contactService } from '@/services/contact.service'
import { ApiResponse } from '@/lib/api-response'
import { ZodError } from 'zod'

export class ContactController {
    async submit(req: NextRequest) {
        try {
            const body = await req.json()

            // 1. Validation
            const validatedData = contactSchema.parse(body)

            // 2. Business Logic delegating to Service
            await contactService.processInquiry(validatedData)

            // 3. Response
            return ApiResponse.success(null, 'Inquiry received successfully. We will be in touch shortly.')

        } catch (error) {
            if (error instanceof ZodError) {
                return ApiResponse.validationError(error)
            }
            console.error('[ContactController] Error:', error)
            return ApiResponse.internalError('An unexpected error occurred processing your request.')
        }
    }
}

export const contactController = new ContactController()

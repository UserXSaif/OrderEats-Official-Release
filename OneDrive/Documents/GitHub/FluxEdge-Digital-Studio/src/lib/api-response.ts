import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

type ApiResponseData<T> = {
    success: boolean
    message?: string
    data?: T
    errors?: any
    timestamp: string
}

export class ApiResponse {
    static success<T>(data: T, message: string = 'Success', status: number = 200) {
        const response: ApiResponseData<T> = {
            success: true,
            message,
            data,
            timestamp: new Date().toISOString()
        }
        return NextResponse.json(response, { status })
    }

    static error(message: string, errors?: any, status: number = 500) {
        const response: ApiResponseData<null> = {
            success: false,
            message,
            errors,
            timestamp: new Date().toISOString()
        }
        return NextResponse.json(response, { status })
    }

    static badRequest(message: string = 'Bad Request', errors?: any) {
        return this.error(message, errors, 400)
    }

    static validationError(error: ZodError) {
        return this.badRequest('Validation failed', error.issues)
    }

    static internalError(message: string = 'Internal Server Error') {
        return this.error(message, null, 500)
    }
}

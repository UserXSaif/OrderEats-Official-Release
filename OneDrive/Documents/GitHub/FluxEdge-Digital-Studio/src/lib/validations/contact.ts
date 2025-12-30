import { z } from 'zod'

export const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    project: z.string().min(10, { message: "Please provide more details about the project." }),
    budget: z.string().optional(),
    timeline: z.string().optional()
})

export type ContactFormData = z.infer<typeof contactSchema>

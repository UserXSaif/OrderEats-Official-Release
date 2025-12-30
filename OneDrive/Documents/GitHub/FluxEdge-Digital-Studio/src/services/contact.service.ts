import { ContactFormData } from '@/lib/validations/contact'
import { db } from '@/lib/store'

export class ContactService {
    // In a real app, inject DB client or email provider here

    async processInquiry(data: ContactFormData): Promise<boolean> {
        // 1. Save to "Database"
        const savedLead = db.addLead(data)
        console.log('[ContactService] Saved inquiry:', savedLead)

        // 2. Simulate logic/delay
        await new Promise(resolve => setTimeout(resolve, 800))

        // 3. Send email notification (Simulation)
        await this.sendEmailNotification(data)

        return true
    }

    private async sendEmailNotification(data: ContactFormData) {
        console.log('[ContactService] Sending email to admin for project:', data.project)
        // Integration with Resend/SendGrid would go here
    }
}

export const contactService = new ContactService()

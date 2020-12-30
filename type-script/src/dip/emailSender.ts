import { Email } from './email';

export class EmailSender {
    send(email: Email): void {
        console.log(`To:${email.getTo()}, Subject: ${email.getSubject()}, Message: ${email.getMessage()}`);
    }
}

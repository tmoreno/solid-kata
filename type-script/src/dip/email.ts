export class Email {
    constructor(
        private to: string,
        private subject: string,
        private message: string
    ) {}

    getTo(): string {
        return this.to;
    }

    getSubject(): string {
        return this.subject;
    }

    getMessage(): string {
        return this.message;
    }
}

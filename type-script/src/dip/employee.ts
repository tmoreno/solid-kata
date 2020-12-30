export class Employee {
    constructor(
        private firstName: string,
        private lastName: string,
        private dateOfBirth: Date,
        private email: string
    ) {}

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getDateOfBirth(): Date {
        return this.dateOfBirth;
    }

    getEmail(): string {
        return this.email;
    }
}

import { Clock } from './clock';
import { Email } from './email';
import { Employee } from './employee';
import { EmailSender } from './emailSender';
import { EmployeeRepository } from './employeeRepository'; 

export class BirthdayGreeter {
    constructor(
        private employeeRepository: EmployeeRepository,
        private clock: Clock
    ) {}

    sendGreetings(): void {
        const today = this.clock.today();

        this.employeeRepository.findEmployeesBornOn(today)
            .map(employee => this.emailFor(employee))
            .forEach(email => new EmailSender().send(email));
    }

    emailFor(employee: Employee): Email {
        const message = `Happy birthday, dear ${employee.getFirstName()}!`;
        return new Email(employee.getEmail(), "Happy birthday!", message);
    }
}
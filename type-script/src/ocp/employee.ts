import { EmployeeType } from './employeeType';

export class Employee {

    constructor(
        private salary: number,
        private bonus: number,
        private type: EmployeeType
    ) {}

    payAmount(): number {
        switch (this.type) {
            case EmployeeType.ENGINEER:
                return this.salary;
            case EmployeeType.MANAGER:
                return this.salary + this.bonus;
            default:
                return 0;
        }
    }
}
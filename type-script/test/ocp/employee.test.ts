import { Employee } from '../../src/ocp/employee';
import { EmployeeType } from '../../src/ocp/employeeType';

const BONUS = 100;
const SALARY = 1000;

test('not add bonus to the_engineer pay amount', () => {
    const employee = new Employee(SALARY, BONUS, EmployeeType.ENGINEER);

    expect(employee.payAmount()).toBe(SALARY);
});

test('add_bonus_to_the_manager_pay_amount', () => {
    const employee = new Employee(SALARY, BONUS, EmployeeType.MANAGER);

    expect(employee.payAmount()).toBe(SALARY + BONUS);
});
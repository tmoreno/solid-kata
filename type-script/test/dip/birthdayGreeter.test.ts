import { mock } from 'jest-mock-extended';

import { Clock } from '../../src/dip/clock';
import { Employee } from '../../src/dip/employee';
import { BirthdayGreeter } from '../../src/dip/birthdayGreeter';
import { EmployeeRepository } from '../../src/dip/employeeRepository';

const TODAY = new Date(2017, 8, 6);
    
test('should send greeting email to employee', () => {
    const employee = new Employee("John", "Doe", new Date(1980, 8, 10), "john.doe@foobar.com");

    console.log = jest.fn();

    const clock = mock<Clock>();
    clock.today.mockReturnValue(TODAY);

    const employeeRepository = mock<EmployeeRepository>();
    employeeRepository.findEmployeesBornOn.mockReturnValue([employee]);
    
    const birthdayGreeter = new BirthdayGreeter(employeeRepository, clock);
    birthdayGreeter.sendGreetings();

    expect(console.log).toHaveBeenCalledWith(`To:${employee.getEmail()}, Subject: Happy birthday!, Message: Happy birthday, dear ${employee.getFirstName()}!`);
});

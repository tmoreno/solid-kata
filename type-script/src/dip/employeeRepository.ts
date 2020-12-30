import { Employee } from './employee';

export interface EmployeeRepository {
    findEmployeesBornOn(date: Date): Array<Employee>;
}

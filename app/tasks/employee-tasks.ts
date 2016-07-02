import {Employee} from "../domain/employee";

export class EmployeeTasks{

    employees: Employee[] = Employee[0];

    //return a promoise for now. This will allow us to refactor to using a web service.
    save(employee:Employee){
        this.employees.push(employee);
        return Promise.resolve();
    }
}
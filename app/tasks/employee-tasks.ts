import {Employee} from "../domain/employee";
import {ALL_JOBS} from "../domain/Jobs";

export class EmployeeTasks{

    employees: Employee[] = [ 
        new Employee("Adam","Alinauskas"),
        new Employee("Jill","Valentine"),
        new Employee("Chris","Redfield"),
        new Employee("Claire","Redfield"),
        new Employee("Ada","Wong")        
        ];

    //return a promoise for now. This will allow us to refactor to using a web service.
    save(employee:Employee){
        this.employees.push(employee);
        return Promise.resolve();
    }

    getAllEmployees(){
        return Promise.resolve(this.employees);
    }

    getJobs(){
        return Promise.resolve(ALL_JOBS);
    }
}
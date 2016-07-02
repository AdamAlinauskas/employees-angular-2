import {Component,OnInit} from '@angular/core'
import {Employee} from './domain/Employee'
import {Job} from './domain/Job'
import {ALL_JOBS} from './domain/Jobs'
import {EmployeeTasks} from './tasks/employee-tasks'

@Component({
    selector:'add-edit-employee',
    templateUrl:'app/templates/add-edit-employee.component.html',
})
export class AddEditEmployeeComponent implements OnInit{
    
    employee: Employee = new Employee("","");
    jobs:Job[] = [];

    constructor(public employeeTasks:EmployeeTasks){
    }

    save(newEmployee:Employee){
        this.employeeTasks.save(newEmployee);
    }

    ngOnInit(){
        this.employeeTasks.getJobs().then(jobs => this.jobs = jobs);
    }

    diag(){
        return JSON.stringify(this.employee);
    }
}
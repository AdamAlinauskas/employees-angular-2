import {Component,OnInit} from '@angular/core'
import {EmployeeTasks} from './tasks/employee-tasks'
import {Employee} from './domain/employee'

@Component({
    selector:'employees',
    templateUrl:'app/templates/employees.component.html'

})

export class EmployeesComponent implements OnInit {
    me:EmployeesComponent = this;
    employees:Employee[] = [];

    constructor(public employeeTasks: EmployeeTasks){

    }

    ngOnInit(){
        this.employeeTasks.getAllEmployees().then((allEmployees)=> {
            this.employees = allEmployees
            }
        );
    }
}
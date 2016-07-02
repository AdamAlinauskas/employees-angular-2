import {Component} from '@angular/core'
import {Employee} from './domain/Employee'
import {Job} from './domain/Job'
import {ALL_JOBS} from './domain/Jobs'
import {EmployeeTasks} from './tasks/employee-tasks'

@Component({
    selector:'add-edit-employee',
    templateUrl:'app/templates/add-edit-employee.component.html',
})
export class AddEditEmployeeComponent{
    
    employee: Employee = new Employee();

    constructor(public employeeTasks:EmployeeTasks){

    }

    save(){
        this.employeeTasks.save(this.employee);
    }
}
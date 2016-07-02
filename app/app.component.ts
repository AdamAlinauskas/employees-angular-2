import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router'
import {EmployeeTasks} from './tasks/employee-tasks'

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    providers:[EmployeeTasks],
    directives:[ROUTER_DIRECTIVES]

})

export class AppComponent { 
    name: string = "Adam";

    constructor(){

    }
}

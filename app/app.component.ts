import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router'

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    providers:[],
    directives:[ROUTER_DIRECTIVES]

})

export class AppComponent { 
    name: string = "Adam";

    constructor(){

    }
}

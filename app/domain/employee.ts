
import {Job} from "./job"

export class Employee{
    constructor(public firstName:string, public lastName:string,public employeeID?:number, public job?:Job ){
    }
}
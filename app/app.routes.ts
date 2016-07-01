import { provideRouter, RouterConfig }  from '@angular/router';
import {AddEditEmployeeComponent} from './add-edit-employee.component'
import {DashboardComponent} from './dashboard.component'

const routes: RouterConfig = [
  {
    path: 'addEditEmployee',
    component: AddEditEmployeeComponent
  },
  {
    path:'',
    component:DashboardComponent
    
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

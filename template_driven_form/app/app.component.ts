import { Component } from '@angular/core';
import {Employee}  from './employee'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

     // emp:Employee;

    getData(employee){


   console.log(employee)
   alert(employee.eid +" "+employee.ename)

   // we can call EmployeeService add(employee) method here to add this data to the db.json or spring-app

    }



}




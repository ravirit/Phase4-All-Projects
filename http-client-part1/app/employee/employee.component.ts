import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {

  
     employeeList:Employee[] = [];


  constructor(private service:EmployeeService) {

  
   }

  ngOnInit(): void {

      


  }

  result:string = "";

   test(){

    
      this.service.getAllEmployees().
              subscribe(
                (data)=>{ 
                  console.log(data);
                   this.employeeList.push(data);
                   })


   }

}


class Employee{

  id:number;
  ename:string;
  salary:number;


}
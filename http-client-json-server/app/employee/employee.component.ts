import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {Employee} from 'src/app/emloyee'

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


  add(){


    this.service.addEmployee().subscribe((data)=>{console.log(data)});

  }


    delete(){

        this.service.deleteEmployee().subscribe((data)=>{console.log(data)});


    }


   test(){

    
      this.service.getAllEmployees().
              subscribe(
                (data)=>{ 
                  console.log(data);
               this.employeeList = data;
                   })


   }

}


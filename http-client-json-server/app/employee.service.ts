import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {Employee} from 'src/app/emloyee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 

  // http service
  constructor(private  http:HttpClient) { }

  //baseUrl:string = "../assets/db.json";
  baseUrl:string ="http://localhost:3000";// will call spring rest api

    getAllEmployees():Observable<any>{

      
         return this.http.get<any>(this.baseUrl+'/employee'); 


    }


    deleteEmployee():Observable<any>{


        return this.http.delete(this.baseUrl+'/employee/101');


    }

    employee:Employee = {"id":111,"ename":"javeed","salary":3000};

    addEmployee():Observable<any>{

        return this.http.post(this.baseUrl+'/employee',this.employee);

    }



  getData():string{

    return "this is employee data from service";


  }


}

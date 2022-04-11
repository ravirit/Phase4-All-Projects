import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 

  // http service
  constructor(private  http:HttpClient) { }

  baseUrl:string = "../assets/db.json";

    getAllEmployees():Observable<any>{

      
         return this.http.get<any>(this.baseUrl);


    }






  getData():string{

    return "this is employee data from service";


  }


}

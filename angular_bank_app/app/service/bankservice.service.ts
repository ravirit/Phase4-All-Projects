import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Bank } from '../bank';
import { catchError } from "rxjs/operators";
import { Transaction } from '../transaction';

@Injectable({
  providedIn: 'root'
})
export class BankserviceService {

 	private baseUrl = 'http://localhost:8081';
  constructor(private http: HttpClient) { }

  createAccount(bank :Object):Observable<Object>{
	return this.http.post(`${this.baseUrl}`+`/create`,bank);
}
  showBalance(accNo: number):Observable<Bank>{
	return this.http.get<Bank>(`${this.baseUrl}`+`/show/`+accNo).pipe(catchError(this.errorHandle));
}
  deposite(accNo: number,depositeAmount: number):Observable<Bank>{
	return this.http.get<Bank>(`${this.baseUrl}`+`/deposite/`+accNo+`&`+depositeAmount).pipe(catchError(this.errorHandle));
}
  get(accNo:number):Observable<Bank>{
    return this.http.get<Bank>(`${this.baseUrl}`+`/get/`+accNo).pipe(catchError(this.errorHandle));
}
  withdraw(accNo:number,withdrawAmount:number):Observable<Bank>{
	return this.http.get<Bank>(`${this.baseUrl}`+`/withdraw/`+accNo+`&`+withdrawAmount).pipe(catchError(this.errorHandle));
}
  printTransactions(accNo:number):Observable<Transaction>{
	return this.http.get<Transaction>(`${this.baseUrl}`+`/print/`+accNo).pipe(catchError(this.errorHandle));
}
  transfer(saccNo:number,raccNo:number,transferAmount:number):Observable<Bank>{
	return this.http.get<Bank>(`${this.baseUrl}`+`/fund/`+saccNo+`&`+raccNo+`&`+transferAmount).pipe(catchError(this.errorHandle));
}
errorHandle(error: HttpErrorResponse) {
    return throwError(error.message || " Server Error");
  }
}

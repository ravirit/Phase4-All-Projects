import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private url: string = 'http://localhost:3000/payment'

  constructor(private httpClient: HttpClient) { }

  public addPaymentDetails(payment: any) {
    return this.httpClient.post(`${this.url}/add`, payment);
  }

  public getPaymentDetails() {
    return this.httpClient.get(`${this.url}/all`);
  }

  public deletePaymentDetails() {
    return this.httpClient.delete(`${this.url}/delete`);
  }
}

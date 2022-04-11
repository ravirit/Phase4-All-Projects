import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private url: string = 'http://localhost:3000/cart'

  constructor(private httpClient: HttpClient) { }

  public getAllFoodsFromCart() {
    return this.httpClient.get(`${this.url}/all`);
  }

  public addFoodToCart(foodCartItem: any) {
    return this.httpClient.post(`${this.url}/add`, foodCartItem);
  }

  public removeAllFoodsFromCart() {
    return this.httpClient.delete(`${this.url}/delete`);
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private url: string = 'http://localhost:8080/food'

  constructor(private httpClient: HttpClient) { }

  public getFoodByName(food_name: string) {
    return this.httpClient.get(`${this.url}/foods1/${food_name}`);
  }

  public addFood(food: any) {
    return this.httpClient.post(`${this.url}/add`, food);
  }

  public deleteFood(id: number) {
    return this.httpClient.delete(`${this.url}/food2/delete/${id}`);
  }

  public getAllFoods() {
    return this.httpClient.get(`${this.url}/all`);
  }
}

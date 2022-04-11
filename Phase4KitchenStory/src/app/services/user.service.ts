import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://localhost:3000/user'

  constructor(private httpClient: HttpClient) { }

  public getAllUsers() {
    return this.httpClient.get(`${this.url}/all`);
  }

  public addUser(user: any) {
    return this.httpClient.post(`${this.url}/add`, user);
  }

  public deleteUserDetails() {
    return this.httpClient.delete(`${this.url}/delete`);
  }
}

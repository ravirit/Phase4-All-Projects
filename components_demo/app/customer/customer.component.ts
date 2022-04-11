import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

    data:string = "this is customer componenet";

  constructor() { }

  ngOnInit(): void {
  }

}

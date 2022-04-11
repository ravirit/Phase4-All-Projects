import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  public foods: any;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }

  public getFoods() {
    this.cartService.getAllFoodsFromCart().subscribe(
      (res) => {
        this.foods = res;
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { PaymentService } from 'src/app/services/payment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  public foodCartInfo: any;
  public userInfo: any;
  public paymentInfo: any;

  public cartIsEmpty: boolean = false;
  public userIsEmpty: boolean = false;
  public paymentIsEmpty: boolean = false;

  constructor(private cartService: CartService, private userSerivce: UserService, private paymentService: PaymentService, private router: Router) { }

  ngOnInit(): void {
    this.getAllFoods();
    this.getUserDetails();
    this.getPaymentDetails();

    this.deleteAllFoods();
    this.deleteUserDetails();
    this.deletePaymentDetails();
  }

  public getAllFoods() {
    this.cartService.getAllFoodsFromCart().subscribe(
      (res) => {
        this.foodCartInfo = res;
      }
    )
  }

  public deleteAllFoods() {
    this.cartService.removeAllFoodsFromCart().subscribe(
      (res) => {
        this.cartIsEmpty = true;
      }
    )
  }

  public getUserDetails() {
    this.userSerivce.getAllUsers().subscribe(
      (res) => {
        this.userInfo = res;
      }
    )
  }

  public deleteUserDetails() {
    this.userSerivce.deleteUserDetails().subscribe(
      (res) => {
        this.userIsEmpty = true;
      }
    )
  }

  public getPaymentDetails() {
    this.paymentService.getPaymentDetails().subscribe(
      (res) => {
        this.paymentInfo = res;
      }
    )
  }

  public deletePaymentDetails() {
    this.paymentService.deletePaymentDetails().subscribe(
      (res) => {
        this.paymentIsEmpty = true;
      }
    )
  }
}

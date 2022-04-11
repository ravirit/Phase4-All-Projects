import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.css']
})
export class FoodSearchComponent implements OnInit {

  public food: any;
  public foodSearchForm: FormGroup;
  public submitted: boolean = false;
  public addedToCart: boolean = false;

  constructor(private formBuilder: FormBuilder, private foodService: FoodService, private cartService: CartService, private router: Router) { 
    this.foodSearchForm = this.formBuilder.group({
      foodSearchFormItem: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(foodSearchForm: any) {
    this.submitted = true;
    this.foodService.getFoodByName(this.foodSearchForm.value).subscribe(
      (res) => {
        this.food = res;
      }
    );
  }

  public onClick(food: any) {
    this.cartService.addFoodToCart(food).subscribe(
      res => {
        this.router.navigateByUrl("/view-cart");
      }
    )
  }
}

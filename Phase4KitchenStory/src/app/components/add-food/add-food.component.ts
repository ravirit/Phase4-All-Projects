import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  public addFoodForm: FormGroup;
  public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private foodService: FoodService, private router: Router) { 
    this.addFoodForm = this.formBuilder.group({
      food_name: ['', [Validators.required]],
      food_price: ['', [Validators.required]],
      food_category: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(addFoodForm: any) {
    this.submitted = true;
    this.foodService.addFood(this.addFoodForm.value).subscribe(res=>{
      this.router.navigateByUrl("/food-list");
    });
  }
}

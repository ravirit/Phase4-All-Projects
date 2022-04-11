import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  public deleted: boolean = false;
  public food_list: any;

  constructor(private foodService: FoodService, private router: Router) { }

  ngOnInit(): void {
  }

  public onDelete(id: number) {
    this.foodService.deleteFood(id).subscribe(
      res => {
        this.deleted = true;
        this.router.navigateByUrl("/food-list");
        this.getAllFoods();
      }
    )
  }

  public getAllFoods() {
    this.foodService.getAllFoods().subscribe(
      res => {
        this.food_list = res;
      }
    )
  }
}

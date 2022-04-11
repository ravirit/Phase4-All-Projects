import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  name:string = "javeed";

  cname:string ="chennai";

  logo:string = "../assets/blue.jpg";

  custName:string = "king";


   mycolor = "green";

   isSpecial = false;
   color1 = "blue";
   color2 = "red";

   isValid = true;

   items = ['toys','books','candies','baloons','colors'];

   save(){

    alert('this is event binding')


   }



}

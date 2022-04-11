import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';


 parentData = "Hi , this is parent data";


 
 dataFromChild = "";

getData(value){

  this.dataFromChild = value;

console.log(value);

}


}

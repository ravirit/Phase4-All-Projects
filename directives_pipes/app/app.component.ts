import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 // template:'<h1>This is Component directive</h1>',
 templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent {
  title = 'myapp';

  mydate:Date = new Date();

  data:string = "java";


}

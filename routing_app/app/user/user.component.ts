import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


    userid:string;

  constructor(private route:ActivatedRoute) {

    route.params.subscribe((p1)=>{ this.userid = p1['id'] });

   }

  ngOnInit(): void {

     

  }

}

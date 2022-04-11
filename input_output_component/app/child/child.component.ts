import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  


  constructor() { 

  }

  ngOnInit(): void {
  }

  @Input()
  myInput:string = "";




  @Output()
  myOutput:EventEmitter<string> = new EventEmitter();

  childData = "Hi , This is child data";


  sendData(){

        this.myOutput.emit(this.childData);

      }


  
}

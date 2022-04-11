import { Component, OnInit } from '@angular/core';
import { BankserviceService } from '../service/bankservice.service';
import { Bank } from '../bank';

@Component({
  selector: 'app-deposite',
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.css']
})
export class DepositeComponent implements OnInit {
	
	bank: Bank = new Bank();
	public errMessage: string;
	displayMessage:string;
	accNo:number;
	depositeAmount:number;
  constructor(private service: BankserviceService) { }

  ngOnInit() {
  }
	
	deposite()
	{
		alert(this.accNo+" deposite amount is: "+this.depositeAmount);
		this.service.deposite(this.accNo,this.depositeAmount).subscribe(data=>(this.bank = data),error => (this.errMessage = error));
	}

}

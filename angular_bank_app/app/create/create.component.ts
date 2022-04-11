 import { Component, OnInit } from '@angular/core';
import { BankserviceService } from '../service/bankservice.service';
import { Bank } from '../bank';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  bank: Bank = new Bank();

  constructor(private service:BankserviceService) { }

  ngOnInit() {
  }
  
	createAccount()
	{
		this.bank.accNo = Math.floor(Math.random() * (10000 - 1) + 1);
		this.service.createAccount(this.bank).subscribe(data=>console.log(data), error=>console.log(error));
		alert(this.bank.accHolder+" account is created by account number "+this.bank.accNo);
	}
	
}

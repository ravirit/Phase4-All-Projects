import { Component, OnInit } from '@angular/core';
import { BankserviceService } from '../service/bankservice.service';
import { Bank } from '../bank';

@Component({
  selector: 'app-showbalance',
  templateUrl: './showbalance.component.html',
  styleUrls: ['./showbalance.component.css']
})
export class ShowbalanceComponent implements OnInit {

	bank: Bank = new Bank();
	bank1: Bank = new Bank();
	public errMessage: string;
	displayMessage:string;
  constructor(private service: BankserviceService) { }

  ngOnInit() {
  }

	showBalance(){
	this.service.showBalance(this.bank.accNo).subscribe(data=>(this.bank1 = data),error => (this.errMessage = error));

	}

}

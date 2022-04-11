import { Component, OnInit } from '@angular/core';
import { Bank } from '../bank';
import { BankserviceService } from '../service/bankservice.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

	public errMessage: string;
	bank: Bank = new Bank();
	bank1: Bank = new Bank();
	accNo:number;
	withdrawAmount:number;
  constructor(private service: BankserviceService) { }

  ngOnInit() {
  }

	withdraw(){
		this.service.get(this.accNo).subscribe(data=>(this.bank=data),error => (this.errMessage = error));
		if(this.bank.balance<this.withdrawAmount)
		{
			alert("Insuffient Balance");
		}else if(this.bank.balance>this.withdrawAmount)
		{
			alert(this.accNo+" withdraw amount is: "+this.withdrawAmount);
			this.service.withdraw(this.accNo,this.withdrawAmount).subscribe(data=>(this.bank1=data));
		}
	}
}

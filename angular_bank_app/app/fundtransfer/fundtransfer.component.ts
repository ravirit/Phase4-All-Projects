import { Component, OnInit } from '@angular/core';
import { BankserviceService } from '../service/bankservice.service';
import { Bank } from '../bank';

@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css']
})
export class FundtransferComponent implements OnInit {

	saccNo:number;
	raccNo:number;
	transferAmount:number;
	sBank: Bank = new Bank();
	rBank: Bank = new Bank();
	lBank: Bank = new Bank();
  constructor(private service: BankserviceService) { }

  ngOnInit() {
  }

	transfer()
	{
		this.service.get(this.saccNo).subscribe(data=>(this.sBank=data));
		this.service.get(this.raccNo).subscribe(data=>(this.rBank=data));
		if(this.transferAmount<this.sBank.balance)
		{
			alert(this.transferAmount+" is transfered from "+this.saccNo+" to "+this.raccNo);
			this.service.transfer(this.saccNo,this.raccNo,this.transferAmount).subscribe(data=>(this.lBank=data));
		}
		if(this.saccNo!=this.sBank.accNo)
		{
			alert("Invalid sender account number.");
		} 
		if(this.raccNo!=this.rBank.accNo)
		{
			alert("Invalid receiver account number.");
		} 
		if(this.transferAmount>this.sBank.balance)
		{
			alert("Insufficient funds to transfer.");
		} 
		
	}
}

import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { BankserviceService } from '../service/bankservice.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

	transList:any=[];
	accNo:number;
  constructor(private service: BankserviceService) { }

  ngOnInit() {
  }

	printTransactions()
	{
		this.service.printTransactions(this.accNo).subscribe(data=>(this.transList=data));
	}
}

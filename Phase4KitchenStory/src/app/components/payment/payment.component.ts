import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public paymentForm: FormGroup;
  public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private paymentService: PaymentService, private router: Router) { 
    this.paymentForm = this.formBuilder.group({
      payment_credit_card_number: ['', [Validators.required]],
      payment_name_on_credit_card: ['', [Validators.required]],
      payment_expiration_date: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(paymentForm: any) {
    this.submitted = true;
    this.paymentService.addPaymentDetails(this.paymentForm.value).subscribe(res=>{
      this.router.navigateByUrl("/order-confirmation");
    })
  }
}

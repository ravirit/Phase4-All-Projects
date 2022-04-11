import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public checkoutForm: FormGroup;
  public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { 
    this.checkoutForm = this.formBuilder.group ({
      user_email: ['', [Validators.required]],
      user_full_name: ['', [Validators.required]],
      user_address: ['', [Validators.required]],
      user_address2: ['', [Validators.required]],
      user_city: ['', [Validators.required]],
      user_state: ['', [Validators.required]],
      user_zipcode: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(checkoutForm: any) {
    this.submitted = true;
    this.userService.addUser(this.checkoutForm.value).subscribe(res=>{
      this.router.navigateByUrl("/payment");
    })
  }
}

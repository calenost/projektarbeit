import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signup',
  template: `
    <h3> Sign up</h3>
 <form [formGroup]="signupForm" (ngSubmit)="onSignup()">
   <div class="form-group">
     <label for="email">E-Mail</label>
     <input id="email" type="email" formControlName="email" class="form-control">
   </div>
   <div class="form-group">
     <label for="password">Password</label>
     <input id="password" type="password" formControlName="password" class="form-control">
   </div>
   <button type="submit" [disabled]="!signupForm.valid" class="btn btn-primary">Sign Up</button>
 </form>
  `,
  styles: []
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb:FormBuilder, private authService: AuthService) {

  }
  onSignup()
  {
    this.authService.signupUser(this.signupForm.value);
  }

  ngOnInit() {
    this.signupForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]

    });
  }

}

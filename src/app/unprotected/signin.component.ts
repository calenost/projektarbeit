import {Component, OnInit} from "@angular/core";
import {AuthService} from "../auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  template: `
    <h3> Sign in</h3>
    <form [formGroup]="signinForm" (ngSubmit)="onSignin()">
      <div class="form-group">
        <label for="email">E-Mail</label>
        <input id="email" type="email" formControlName="email" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="password" formControlName="password" class="form-control">
      </div>
      <button type="submit" [disabled]="!signinForm.valid" class="btn btn-primary">Sign In</button>
    </form>
  `,
  styles: []
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService, private router:Router) {
  }
  onSignin(){
    this.authService.signinUser(this.signinForm.value);
    if(this.authService.isAuthenticated())
    {
      this.router.navigate(['admin']);
    }


  }

  ngOnInit() {    this.signinForm=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]

  });
  }

}

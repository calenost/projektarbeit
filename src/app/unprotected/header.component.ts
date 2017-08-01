import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-header',
  template:`<header>
    <ul class="nav nav-tabs">

      <li role="presentation" routerLinkActive="active"><a [routerLink]="['/exchange']"> Exchange Student</a></li>
      <li role="presentation" routerLinkActive="active"><a [routerLink]="['/local']">Local Student</a></li>


      <ul class="nav nav-tabs navbar-right">

        <li role="presentation"><a style="cursor: pointer" [routerLink]="['/signin']" *ngIf="!isAuthenticated">Login</a>
        </li>
        <li role="presentation"><a style="cursor: pointer" (click)="onLogout()" *ngIf="isAuthenticated">Logout</a></li>

      </ul>

    </ul>

  </header>`,
  styles: []
})
export class HeaderComponent implements OnInit {
 isAuthenticated=false;
 currentUser;
  constructor(private authService:AuthService) {
    this.authService.isAuthenticated().subscribe(
      authStatus=> this.isAuthenticated=authStatus)
  }

onLogout()
{
  this.authService.logout();
  this.isAuthenticated=false;
}
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
 isAuthenticated=false;
  constructor(private authService:AuthService) {
    this.authService.isAuthenticated().subscribe(
      authStatus=> this.isAuthenticated=authStatus
    );
  }
onLogout()
{
  this.authService.logout();
  this.isAuthenticated=false;
}
  ngOnInit() {
  }

}

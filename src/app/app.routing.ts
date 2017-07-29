import {RouterModule, Routes} from "@angular/router";
import {ExchangestudentComponent} from "./unprotected/exchangestudent/exchangestudent.component";
import {LocalComponent} from "./unprotected/local/local.component";
import {SigninComponent} from "./unprotected/signin.component";
import {AdminComponent} from "./admin/admin.component";
import {AdminGuard} from "./admin/admin.guard";
import {SignupComponent} from "./unprotected/signup.component";
import {HomeComponent} from "./unprotected/home.component";
import {SubmittedComponent} from "./unprotected/submitted.component";

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'exchange', component: ExchangestudentComponent},
  {path: 'local', component: LocalComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'submitted', component: SubmittedComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AdminGuard]}
];
export const routing = RouterModule.forRoot(APP_ROUTES);

import {RouterModule, Routes} from "@angular/router";
import {ExchangestudentComponent} from "./unprotected/exchangestudent/exchangestudent.component";
import {LocalComponent} from "./unprotected/local/local.component";
import {SigninComponent} from "./unprotected/signin.component";
import {AdminComponent} from "./admin/admin.component";
import {AdminGuard} from "./admin/admin.guard";
 const APP_ROUTES:Routes=[
  {path:'',redirectTo:'/exchange', pathMatch:'full'},
  {path:'exchange', component:ExchangestudentComponent},
  {path:'local', component:LocalComponent},
   {path:'signin', component:SigninComponent},
   {path: 'admin', component:AdminComponent, canActivate: [AdminGuard]}
];
export const routing= RouterModule.forRoot(APP_ROUTES);

import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "../auth.service";
/**
 * Created by Felix on 07.06.2017.
 */
@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService){}
  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    return this.authService.isAuthenticated().first();
  }
}

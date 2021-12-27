import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from  '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuarder implements CanActivate, CanActivateChild{

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('EsAdmin'+ this.authService.getUserActual().esAdmin);
    return  this.authService.getUserActual().esAdmin;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

}

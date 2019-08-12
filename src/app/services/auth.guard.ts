import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('token')) {
      return state.url.startsWith('/dashboard')
        ? true
        : (this.router.navigate(['signup']), false);
    } else {
      return state.url.startsWith('/dashboard')
        ? (this.router.navigate(['login']), false)
        : true;
    }
  }
}

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class JwtGuard implements CanActivate {
  // this gaurd will check for jwt and jwt expiration
  constructor(
    private auth: AuthService,

    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.auth.getEmployee()) {
      return false;
    }
    const jwt: any = jwtDecode(this.auth.getToken());
    const expDate = new Date(jwt.exp * 1000);
    const currentDate = new Date();

    if (currentDate > expDate) {
      alert('session experied login again');
      this.auth.logout();
      return false;
    }
    return true;
  }
}

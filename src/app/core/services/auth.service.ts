import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './localstorage.service';

@Injectable()
export class AuthService {
  constructor(
    private localstorage: LocalStorageService,
    private router: Router
  ) {}
  logout() {
    this.localstorage.clearAll();
    this.router.navigate(['/']);
  }
  // getting user details from localstorage
  getEmployee() {
    return this.localstorage.get('employee');
  }
  getToken() {
    return this.getEmployee().jwt;
  }
  getRole() {
    return this.getEmployee().role;
  }
  getId() {
    return this.getEmployee().id;
  }
}

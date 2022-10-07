import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable()
export class ViewService {
  constructor() {}
  sideNav: MatSidenav;
  setSideNav(sideNav: MatSidenav) {
    this.sideNav = sideNav;
  }
  open() {
    this.sideNav.open();
  }
  close() {
    this.sideNav.close();
  }
  toggle() {
    this.sideNav.toggle();
  }
}

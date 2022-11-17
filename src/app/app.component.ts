import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { ViewService } from './core/services/view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ems-app';
  constructor(public viewS: ViewService, public auth: AuthService) {}

  toggleSideNav() {
    this.viewS.toggle();
  }
  handleClick() {
    this.auth.logout();
  }
}

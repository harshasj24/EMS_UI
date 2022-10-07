import { Component } from '@angular/core';
import { ViewService } from './core/services/view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ems-app';
  constructor(public viewS: ViewService) {}
  toggleSideNav() {
    this.viewS.toggle();
  }
}

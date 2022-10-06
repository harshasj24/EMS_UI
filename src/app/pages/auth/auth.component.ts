import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private router: Router) {}
  url: string = '';
  ngOnInit(): void {
    this.url = this.router.url;
    console.log(this.router.url);
  }
}

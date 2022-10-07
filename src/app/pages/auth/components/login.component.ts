import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public dailog: MatDialog, private route: Router) {}
  typePass: boolean = true;

  loginForm = new FormGroup({});
  handleSubmit() {
    this.route.navigate(['/employee']);
  }
  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {}
  class = '';
  hide() {
    this.class = 'hide';
  }
  handleSnackBar() {
    this.snackBar.open('Employee Added', `X`, {
      panelClass: 'sucess',
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 2000,
    });
    this.class = 'show';
  }
}

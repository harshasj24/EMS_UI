import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/pages/employee/services/store.service';
import { AdminApiService } from '../../services/admin-api.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(
    private snackBar: MatSnackBar,
    private adminApi: AdminApiService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((route) => {
      console.log(route);
    });
  }
}

// employeeId: 1
// employeeName: "Admin"
// email: "admin@gmail.com"
// password: "$2a$10$jjHXayswsxFHGjPwdriBjex9nMOiaaBq0KIWhZJO7YGIVDFL9GQnm"
// role: "ROLE_ADMIN"
// employeeAddress: null
// phoneNo: null
// timeSheet: (2) [{…}, {…}]

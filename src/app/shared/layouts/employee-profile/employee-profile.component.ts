import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ViewService } from 'src/app/core/services/view.service';
import { AddEmpDailogComponent } from 'src/app/pages/admin/components/add-emp-dailog/add-emp-dailog.component';
import { ApiService } from 'src/app/pages/auth/services/api.service';
import { TimeSheetDailogComponent } from 'src/app/pages/employee/components/time-sheet-dailog/time-sheet-dailog.component';
import { StoreService } from 'src/app/pages/employee/services/store.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css'],
})
export class EmployeeProfileComponent implements OnInit {
  @Input() employeeDetails: any = {};
  @Input() isAdmin: boolean;

  openDailog() {
    let dailogRef = this.dailog.open(TimeSheetDailogComponent, {
      disableClose: true,
      hasBackdrop: true,
      panelClass: 'p-2',
    });
    dailogRef.afterClosed().subscribe((val) => {
      // this.getEmployeeDetails(this.auth.getId(), true);
    });
  }
  constructor(
    private viewS: ViewService,
    private router: ActivatedRoute,
    private auth: AuthService,
    private dailog: MatDialog,
    private store: StoreService
  ) {}

  ngOnInit(): void {}
  displayedColumns: string[] = [
    'date',
    'loginTime',
    'logoutTime',
    'description',
  ];

  handleEdit() {
    let { timeSheet, ...empProfileDetails } = this.employeeDetails;
    console.log(empProfileDetails);

    let dailog = this.dailog.open(AddEmpDailogComponent, {
      data: {
        edit: true,
        empProfileDetails,
      },
    });

    dailog.afterClosed().subscribe((val) => {
      // console.log(val);
      if (val) {
        this.store.getEmployeeDetails(this.employeeDetails.employeeId, true);
      }
    });
  }
}

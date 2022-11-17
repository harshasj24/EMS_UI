import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SanckBarService } from 'src/app/core/services/snackbar.service';
import { AddEmpDailogComponent } from './components/add-emp-dailog/add-emp-dailog.component';
import { AdminApiService } from './services/admin-api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(
    private snackBar: MatSnackBar,
    private adminApi: AdminApiService,
    private matDailog: MatDialog,
    private snacbar: SanckBarService,
    private router: Router
  ) {}
  empId: number;
  employeeDetails: any;
  ngOnInit(): void {}
  class = '';
  hideDrawer() {
    this.class = 'hide';
  }
  handleAddEmployee() {
    let dailogRef = this.matDailog.open(AddEmpDailogComponent);
  }

  showDrawer() {
    this.class = 'show';
  }

  handleClose() {
    this.hideDrawer();
  }

  handleSearchEmployee() {
    console.log('called');
    this.router.navigate(['/employee/', this.empId]);
    // this.adminApi.getEmployeeDetails(this.empId).subscribe(
    //   (res: any) => {
    //     console.log(res);
    //     if (res.error) {
    //       this.snacbar.error(res.obj);
    //     } else {
    //       this.showDrawer();
    //       this.employeeDetails = res.obj;
    //     }
    //   },
    //   () => {
    //     this.snacbar.error('Invalid User Id');
    //   }
    // );
  }
}

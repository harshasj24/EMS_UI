import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpService } from 'src/app/core/services/http.service';
import { LocalStorageService } from 'src/app/core/services/localstorage.service';
import { ViewService } from 'src/app/core/services/view.service';
// import { ApiService } from "../auth/services/api.service";
import { TimeSheetDailogComponent } from './components/time-sheet-dailog/time-sheet-dailog.component';
import { ApiService } from './services/api.service';
import { StoreService } from './services/store.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit, AfterViewInit {
  constructor(
    private viewS: ViewService,
    private api: ApiService,
    private router: ActivatedRoute,
    private auth: AuthService,
    private store: StoreService,
    private dailog: MatDialog // private dailogRef: MatDialogRef<TimeSheetDailogComponent>
  ) {}
  @ViewChild('sideNav') sideNav: MatSidenav;
  ngAfterViewInit(): void {
    this.viewS.setSideNav(this.sideNav);
  }

  openDailog() {
    let dailogRef = this.dailog.open(TimeSheetDailogComponent, {
      disableClose: true,
    });
    dailogRef.afterClosed().subscribe((val) => {
      // this.getEmployeeDetails(this.auth.getId(), true);
    });
  }
  displayedColumns: string[] = [
    'date',
    'loginTime',
    'logoutTime',
    'description',
  ];
  // dataSource = ELEMENT_DATA;
  employeeDetails: any = {};

  // getEmployeeDetails(id: number, reCall: boolean) {
  //   if (!this.store.isEmpDetLoaded || reCall) {
  //     this.api.getEmployeeDetails(id).subscribe((val: any) => {
  //       console.log(val);
  //       this.store.isEmpDetLoaded = true;
  //       this.store.setEmployeeDetails(val.obj);
  //     });
  //   }
  // }
  ngOnInit(): void {
    // this.viewS.setSideNav(this.sideNav);
    this.router.params.subscribe((route: any) => {
      if (route.id) {
        console.log(true);
        // this.getEmployeeDetails(route.id, false);
      } else {
        // this.getEmployeeDetails(this.auth.getId(), false);
      }
    });
    this.store.employeeStore.subscribe((store) => {
      this;
    });
    this.store.employeeStore.subscribe((store: any) => {
      console.log(store);
      this.employeeDetails = store.employeeDetails;
    });
    this.store.getEmployeeDetails(this.auth.getId());
  }
}

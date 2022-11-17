import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { Employee } from 'src/app/core/models/employee';
import { SanckBarService } from 'src/app/core/services/snackbar.service';
import { TimeSheetDailogComponent } from '../components/time-sheet-dailog/time-sheet-dailog.component';
import { ApiService } from './api.service';
export interface EmployeeState {
  employeeDetails: any;
}
@Injectable()
export class StoreService {
  constructor(private api: ApiService, private snackbar: SanckBarService) {}
  isEmpDetLoaded: boolean = false;
  employeeStore = new BehaviorSubject<EmployeeState>({
    employeeDetails: {},
  });
  setEmployeeStore(empDetails: Employee) {
    let details: any = this.employeeStore.value;
    this.employeeStore.next({ ...details, employeeDetails: empDetails });
  }
  getEmployeeDetails(id: number, reCall: boolean = false) {
    if (!this.isEmpDetLoaded || reCall) {
      this.api.getEmployeeDetails(id).subscribe((val: any) => {
        console.log(val);
        this.isEmpDetLoaded = true;
        this.setEmployeeStore(val.obj);
      });
    }
  }

  addEmployeeTimesheet(payload: any, dailog: any) {
    this.api.addEmployeeTimeSheet(payload).subscribe(
      (res) => {
        let preVal: any = this.employeeStore.value.employeeDetails;
        preVal.timeSheet = [...preVal.timeSheet, payload];
        console.log(preVal);
        this.setEmployeeStore(preVal);
        this.snackbar.success('Time Sheet Inserted');
        dailog.close();
      },
      (err) => {
        this.snackbar.error('Something went wrong');
      }
    );
  }
}

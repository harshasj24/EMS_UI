import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Employee } from "src/app/core/models/employee";
export interface EmployeeState {
  employeeDetails: any;
}
@Injectable()
export class StoreService {
  isEmpDetLoaded: boolean = false;
  employeeStore = new BehaviorSubject<EmployeeState>({
    employeeDetails: {},
  });

  setEmployeeDetails(empDetails: Employee) {
    let details: any = {};
    this.employeeStore.subscribe((state) => {
      details = state;
    });

    this.employeeStore.next({ ...details, employeeDetails: empDetails });
  }
}

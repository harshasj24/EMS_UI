import { Employee } from "src/app/core/models/employee";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
export interface EmployeeState {
  employeeDetails: Employee;
  employeeTimesheet: any;
}

const adapter = createEntityAdapter<Employee>();
// export const initialState: employeeState = {
//   employeeDetails: {
//     email: "",
//     employeeAddress: "",
//     employeeId: 0,
//     employeeName: "",
//     password: "",
//     phoneNo: 0,
//     role: "",
//   },
//   employeeTimesheet: [],
// };

export const initialState: EmployeeState = adapter.getInitialState({
  employeeDetails: {
    email: "",
    employeeAddress: "",
    employeeId: 0,
    employeeName: "",
    password: "",
    phoneNo: 0,
    role: "",
  },
  employeeTimesheet: [],
});

import { Component, OnInit } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AdminApiService } from "../../services/admin-api.service";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"],
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(
    private snackBar: MatSnackBar,
    private adminApi: AdminApiService
  ) {}
  empId: number;
  employeeDetails: any;
  ngOnInit(): void {}
  class = "";
  hide() {
    this.class = "hide";
  }
  handleSnackBar() {
    this.snackBar.open("Employee Added", `X`, {
      panelClass: "sucess",
    });
    this.class = "show";
  }

  handleSearchEmployee() {
    this.adminApi.getEmployeeDetails(this.empId).subscribe((res: any) => {
      console.log(res);
      if (res.error) {
        this.snackBar.open(res.obj, "X", {
          panelClass: "error",
          horizontalPosition: "center",
          verticalPosition: "top",
          duration: 2000,
        });
      } else {
        this.class = "show";
        this.employeeDetails = res.obj;
      }
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

import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Login } from "../models/employee";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(
    public dailog: MatDialog,
    private route: Router,
    private api: ApiService,
    private snackBar: MatSnackBar
  ) {}
  typePass: boolean = true;
  isInvalid: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });
  handleSubmit() {
    const loginDetails: Login = {
      ...this.loginForm.value,
    };

    console.log(loginDetails);

    this.api.login(loginDetails).subscribe((details: any) => {
      if (details.role === "ROLE_EMPLOYEE") {
        this.route.navigate(["/employee"]);
        this.isInvalid = false;
        this.dailog.closeAll();
      } else if (details.role === "ROLE_ADMIN") {
        this.route.navigate(["/admin"]);
        this.isInvalid = false;
        this.dailog.closeAll();
      } else if (!details.roll && !details.jwt) {
        this.isInvalid = true;
      }
    });
  }
  ngOnInit(): void {}
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginComponent } from "./components/login.component";
import { SignUpComponent } from "./components/sign-up.component";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { MaterialModule } from "src/app/material";

const routes: Routes = [
  {
    path: "login",
    component: AuthComponent,
  },
  {
    path: "signup",
    component: AuthComponent,
  },
];

@NgModule({
  declarations: [AuthComponent, LoginComponent, SignUpComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
  exports: [RouterModule],
})
export class AuthModule {}
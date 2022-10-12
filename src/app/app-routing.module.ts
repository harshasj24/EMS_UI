import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "landingPage",
    pathMatch: "full",
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./pages/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "landingPage",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "employee",
    loadChildren: () =>
      import("./pages/employee/employee.module").then((m) => m.EmployeeModule),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./pages/admin/admin.module").then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

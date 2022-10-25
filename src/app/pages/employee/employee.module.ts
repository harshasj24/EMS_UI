import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeeComponent } from "./employee.component";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material";
import { CoreModule } from "src/app/core/core.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "src/app/interceptors/jwt.interceptor";
import { StoreService } from "./services/store.service";
import { TimeSheetDailogComponent } from "./components/time-sheet-dailog/time-sheet-dailog.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ApiService } from "./services/api.service";
import { MatDialogModule } from "@angular/material/dialog";

const routes: Routes = [
  {
    path: "",
    component: EmployeeComponent,
  },
];

@NgModule({
  declarations: [EmployeeComponent, TimeSheetDailogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    MatDialogModule,
  ],
  exports: [RouterModule],
  providers: [StoreService, ApiService],
})
export class EmployeeModule {}

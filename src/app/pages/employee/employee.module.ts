import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material';
import { CoreModule } from 'src/app/core/core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from 'src/app/interceptors/jwt.interceptor';
import { StoreService } from './services/store.service';
import { TimeSheetDailogComponent } from './components/time-sheet-dailog/time-sheet-dailog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
  },
  {
    path: ':id',
    component: EmployeeDetailsComponent,
  },
];

@NgModule({
  declarations: [
    EmployeeComponent,
    TimeSheetDailogComponent,
    EmployeeDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    MatDialogModule,
    SharedModule,
  ],
  exports: [RouterModule],
  providers: [StoreService, ApiService],
})
export class EmployeeModule {}

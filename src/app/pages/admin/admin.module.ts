import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AdminDetailsComponent } from './components/admin-details/admin-details.component';
import { AdminApiService } from './services/admin-api.service';
import { AddEmpDailogComponent } from './components/add-emp-dailog/add-emp-dailog.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: 'employeeDetails/:id',
    component: EmployeeDetailsComponent,
  },
  {
    path: 'adminDetails',
    component: AdminDetailsComponent,
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    EmployeeDetailsComponent,
    AdminDetailsComponent,
    AddEmpDailogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
  ],
  providers: [AdminApiService],
})
export class AdminModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AdminDetailsComponent } from './components/admin-details/admin-details.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: 'employeeDetails',
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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
  ],
})
export class AdminModule {}

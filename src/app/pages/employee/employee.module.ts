import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material';
import { CoreModule } from 'src/app/core/core.module';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
  },
];

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    CoreModule,
  ],
  exports: [RouterModule],
})
export class EmployeeModule {}

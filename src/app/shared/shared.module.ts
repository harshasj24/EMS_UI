import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeProfileComponent } from './layouts/employee-profile/employee-profile.component';
import { MaterialModule } from '../material';

@NgModule({
  declarations: [EmployeeProfileComponent],
  imports: [CommonModule, MaterialModule],
  exports: [EmployeeProfileComponent],
})
export class SharedModule {}

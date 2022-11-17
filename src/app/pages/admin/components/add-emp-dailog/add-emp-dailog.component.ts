import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SanckBarService } from 'src/app/core/services/snackbar.service';
import { AdminApiService } from '../../services/admin-api.service';

@Component({
  selector: 'app-add-emp-dailog',
  templateUrl: './add-emp-dailog.component.html',
  styleUrls: ['./add-emp-dailog.component.css'],
})
export class AddEmpDailogComponent implements OnInit {
  constructor(
    private addEmpDailog: MatDialogRef<AddEmpDailogComponent>,
    private adminApiService: AdminApiService,
    private snackbar: SanckBarService,
    @Inject(MAT_DIALOG_DATA) private dailogData: any
  ) {}
  addEmpForm = new FormGroup({
    employeeName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    employeeAddress: new FormControl('', [Validators.required]),
    phoneNo: new FormControl('', [Validators.required]),
  });
  isEdit: boolean;
  selectedEmpId: number;
  ngOnInit(): void {
    if (this.dailogData) {
      let { edit, empProfileDetails } = this.dailogData;
      if (edit) {
        this.isEdit = true;
        this.selectedEmpId = empProfileDetails.employeeId;
        let keys = Object.keys(empProfileDetails);
        keys.forEach((key) => {
          this.addEmpForm.get(key)?.patchValue(empProfileDetails[key]);
        });
      }
    }
  }
  handleSubscribe(snackbarMessage: string, editDaiog: boolean) {
    this.addEmpDailog.close(editDaiog);
    this.snackbar.success(snackbarMessage);
  }
  handleSubmit() {
    if (this.isEdit) {
      console.log('called');
      this.adminApiService
        .updateEmployeeDetails(this.selectedEmpId, this.addEmpForm.value)
        .subscribe((res) => {
          this.handleSubscribe('Employee Details Edited Sucessfully', true);
        });
    } else {
      this.adminApiService
        .addEmployeeDetails(this.addEmpForm.value)
        .subscribe((res) => {
          this.handleSubscribe('Employee Added Sucessfully', false);
        });
    }
  }
}

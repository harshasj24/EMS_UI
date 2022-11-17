import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/core/services/localstorage.service';
import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-time-sheet-dailog',
  templateUrl: './time-sheet-dailog.component.html',
  styleUrls: ['./time-sheet-dailog.component.css'],
})
export class TimeSheetDailogComponent implements OnInit {
  constructor(
    private dailog: MatDialogRef<TimeSheetDailogComponent>,
    private localStorage: LocalStorageService,
    private api: ApiService,
    private store: StoreService
  ) {}
  timeSheetForm = new FormGroup({
    date: new FormControl(new Date(), [Validators.required]),
    loginTime: new FormControl('09:00:00', [Validators.required]),
    logoutTime: new FormControl('18:00:00', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  get date() {
    return this.timeSheetForm.get('date');
  }
  get loginTime() {
    return this.timeSheetForm.get('loginTime');
  }
  handleSubmit() {
    console.log(this.timeSheetForm.value);
    console.log(this.loginTime?.value);
    let selectedDate = new Date(this.date?.value);
    let formatedDate = `${selectedDate.getDate()}-${selectedDate.getMonth()}-${selectedDate.getFullYear()}`;
    let payload = {
      ...this.timeSheetForm.value,
      date: formatedDate,
      employee: {
        employeeId: this.localStorage.get('employee').id,
      },
    };

    this.store.addEmployeeTimesheet(payload, this.dailog);
  }
  ngOnInit(): void {}
}

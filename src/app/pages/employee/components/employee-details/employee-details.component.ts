import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../../services/store.service';
@Component({
  templateUrl: './employee-details.html',
  styleUrls: ['./employee-details.css'],
  selector: 'app-employee-details',
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(private store: StoreService, private route: ActivatedRoute) {}
  employeeDetails: any;
  ngOnInit(): void {
    this.store.employeeStore.subscribe((store) => {
      this.employeeDetails = store.employeeDetails;
      console.log('called');
    });

    // geting id from route
    this.route.params.subscribe((route: any) => {
      this.store.getEmployeeDetails(route.id, true);
    });
  }
}

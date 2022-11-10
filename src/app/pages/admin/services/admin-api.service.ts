import { Injectable } from "@angular/core";
import { HttpService } from "src/app/core/services/http.service";

@Injectable()
export class AdminApiService {
  constructor(private http: HttpService) {}
  getEmployeeDetails(id: any) {
    return this.http.get(`/employee/getEmp/${id}`);
  }
}

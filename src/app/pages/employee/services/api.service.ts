import { Injectable } from "@angular/core";
import { HttpService } from "src/app/core/services/http.service";

@Injectable()
export class ApiService {
  constructor(private http: HttpService) {}
  getEmployeeDetails(id: any) {
    return this.http.get(`/employee/getEmp/${id}`);
  }
  addEmployeeTimeSheet(payload: any) {
    return this.http.post("/timeSheet/add", payload);
  }
}

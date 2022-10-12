import { Injectable } from "@angular/core";
import { HttpService } from "src/app/core/services/http.service";
import { Login } from "../models/employee";
import { tap } from "rxjs";
import { LocalStorageService } from "src/app/core/services/localstorage.service";
@Injectable()
export class ApiService {
  constructor(
    private http: HttpService,
    private localStorage: LocalStorageService
  ) {}
  login(loginDetails: Login) {
    return this.http.post("/employee/login", loginDetails).pipe(
      tap((responce) => {
        this.localStorage.set("employee", responce);
      })
    );
  }
}

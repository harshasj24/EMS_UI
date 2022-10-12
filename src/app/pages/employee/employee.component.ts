import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { HttpService } from "src/app/core/services/http.service";
import { LocalStorageService } from "src/app/core/services/localstorage.service";
import { ViewService } from "src/app/core/services/view.service";
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
];
@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent implements OnInit, AfterViewInit {
  constructor(
    private viewS: ViewService,
    private http: HttpService,
    private localStorage: LocalStorageService
  ) {}
  @ViewChild("sideNav") sideNav: MatSidenav;
  ngAfterViewInit(): void {
    this.viewS.setSideNav(this.sideNav);
  }
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
    // this.viewS.setSideNav(this.sideNav);
    console.log(this.localStorage.get("employee"));

    this.http
      .get(`/employee/getEmp/${this.localStorage.get("employee")?.id}`)
      .subscribe((val) => {
        console.log(val);
      });
  }
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ViewService } from "./services/view.service";
import { HttpService } from "./services/http.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [HttpService],
})
export class CoreModule {}

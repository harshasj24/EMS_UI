import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ViewService } from "./services/view.service";
import { HttpService } from "./services/http.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "../interceptors/jwt.interceptor";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}

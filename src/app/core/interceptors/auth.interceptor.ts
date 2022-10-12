import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { LocalStorageService } from "../services/localstorage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private localstorage: LocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    const modifiedRequest = request.clone({
      headers: request.headers.append(
        "authorization",
        `Bearer${this.localstorage.get("employee")?.jwt}`
      ),
    });
    return next.handle(modifiedRequest);
  }
}

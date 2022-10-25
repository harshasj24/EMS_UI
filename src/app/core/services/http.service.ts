import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { baseUrl } from "src/environments/environments";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  get(path: string) {
    return this.http.get(`${baseUrl}${path}`);
  }
  post(path: string, payload: any) {
    return this.http.post(`${baseUrl}${path}`, payload);
  }
  put(path: string, payload: any) {
    return this.http.put(`${baseUrl}${path}`, payload);
  }
  delete(path: string) {
    return this.http.delete(`${baseUrl}${path}`);
  }
}

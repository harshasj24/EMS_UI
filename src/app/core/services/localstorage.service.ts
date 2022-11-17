import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  set(key: string, data: any) {
    const stringfyData = JSON.stringify(data);
    localStorage.setItem(key, stringfyData);
  }

  get(key: string): any {
    let data: any = localStorage.getItem(key);
    const parsedData = JSON.parse(data);
    return parsedData;
  }

  clear(key: string) {
    localStorage.removeItem(key);
  }
  clearAll() {
    localStorage.clear();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
  
})
export class DataService {
  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }
  loginComponent: any;

    apiRequest(method: any, data: any) {
      return this.http.post(this.url + method, data)
    }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../login/user';

@Injectable({
  providedIn: 'root',
  
})
export class DataService {
  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

    apiRequest(method: any, data: any): Observable<User>{
      return this.http.post<User>(this.url + method, data);
    }
}


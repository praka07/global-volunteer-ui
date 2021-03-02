import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalVolunteerService {

  backendUrl: string= 'http://localhost:6060/';

  constructor(private http: HttpClient) { }
  validUserLogin(requestPayLoad: any) : Observable<User> {
    return this.http.post<User>(`${this.backendUrl}validateuserlogin`, requestPayLoad);

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalVolunteerService {
  loggedInUserDetail = new User();



  backendUrl: string= 'http://localhost:6060/';

  constructor(private http: HttpClient,private router: Router) { }
  validUserLogin(requestPayLoad: any) : Observable<User> {
    return this.http.post<User>(`${this.backendUrl}validateuserlogin`, requestPayLoad);

  }


  holdUserDetails = (user: User) => {
    this.loggedInUserDetail = user;

  }
  getLoggedInuser = () => {
    return this.loggedInUserDetail;
  }

  logOut() {
    this.router.navigate(['']);

  }
}

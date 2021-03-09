import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { ActivityDetails } from '../models/activityDetails';

@Injectable({
  providedIn: 'root'
})
export class GlobalVolunteerService {

  loggedInUserDetail = new User();



  backendUrl: string = 'http://localhost:6060/';

  constructor(private http: HttpClient, private router: Router) { }
  validUserLogin(requestPayLoad: any): Observable<User> {
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
  // User related opearions start
  registerUser(createUser: User) {
    return this.http.post(`${this.backendUrl}registeruser`, createUser);

  }

  getAllUsers = (): Observable<User[]> => {
    return this.http.get<User[]>(`${this.backendUrl}getalluser`);
  }

  updateUserDetail(object: User) {
    return this.http.put(`${this.backendUrl}updateuserdetail`, object);

  }
  updatePassword(userDetail: User) {
    return this.http.post(`${this.backendUrl}updatepassword`, userDetail);
  }
  // User related opearions end



  createActivity(activityDetails: ActivityDetails) {
    console.log(`--create activity Request ---`, activityDetails);
    return this.http.post(`${this.backendUrl}createactivity`, activityDetails);

  }

  getAllActivities(): Observable<ActivityDetails[]> {
    return this.http.get<ActivityDetails[]>(`${this.backendUrl}listactivities`);
  }

  updateActivityStatus(al) {
    return this.http.put(`${this.backendUrl}updateactivitystatus`, al);
  }
}

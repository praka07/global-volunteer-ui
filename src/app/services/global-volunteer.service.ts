import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { ActivityDetails } from '../models/activityDetails';
import { FeedBack } from '../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class GlobalVolunteerService {

  holdActivityObj: ActivityDetails;



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
  getAllActivitiesForVolunteer(volunteerId: number): Observable<ActivityDetails[]> {
    return this.http.get<ActivityDetails[]>(`${this.backendUrl}volunteeractivities/${volunteerId}`);
  }

  updateActivityStatus(al) {
    return this.http.put(`${this.backendUrl}updateactivitystatus`, al);
  }

  registerActivityByVolunteer(payload: any) {
    return this.http.post(`${this.backendUrl}registeractivity`, payload);
  }
  volunteerRegisteredActivities(volunteerId: number): Observable<ActivityDetails[]> {
    return this.http.get<ActivityDetails[]>(`${this.backendUrl}volunteerregisteractivities/${volunteerId}`);
  }
  volunteerCancelActivity(payload: any) {

    return this.http.post(`${this.backendUrl}cancelactivity`, payload);
  }
  activityCheckOut(checkOutPayload: any) {
    return this.http.post(`${this.backendUrl}activitycheckout`, checkOutPayload);
  }
  activityCheckIn(checkInPayload: any) {
    return this.http.post(`${this.backendUrl}activitycheckin`, checkInPayload);
  }

  getHomePageActivityList(): Observable<ActivityDetails[]> {
    return this.http.get<ActivityDetails[]>(`${this.backendUrl}homepageactivitylist`);
  }

  getReport() {
    return this.http.get(`${this.backendUrl}report`);

  }
  getCheckedinActivityList(userId: number): Observable<ActivityDetails[]> {
    return this.http.get<ActivityDetails[]>(`${this.backendUrl}checkedinactivitylist/${userId}`);

  }
  storeActivityObject(obj: ActivityDetails) {
    this.holdActivityObj = obj;
  }
  getActivityObject() {
    return this.holdActivityObj;
  }
  feedbackEntry(requestObject: any) {
    return this.http.post(`${this.backendUrl}createfeedback`, requestObject);
  }

  getFeedbackInformation() :Observable<FeedBack[]> {
    return this.http.get<FeedBack[]>(`${this.backendUrl}getfeedbackinformationbyid/${this.getLoggedInuser().userId}`)
  }
}

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivityDetails } from 'src/app/models/activityDetails';
import { User } from 'src/app/models/user';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';

@Component({
  selector: 'app-volunteer-upcoming-activities',
  templateUrl: './volunteer-upcoming-activities.component.html',
  styleUrls: ['./volunteer-upcoming-activities.component.css']
})
export class VolunteerUpcomingActivitiesComponent implements OnInit {
  loggedInUser: User;
  activityList: ActivityDetails[];

  constructor(private service: GlobalVolunteerService, private toastr: ToastrService, private datepipe: DatePipe) {

  }

  ngOnInit(): void {
    this.loggedInUser = this.service.getLoggedInuser();


    this.service.getAllActivitiesForVolunteer(this.loggedInUser.userId).subscribe(res => {
      this.activityList = res;
      console.log(' available activity list ', this.activityList);
    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    })
  }

  registerActivity = (activityObject: ActivityDetails) => {
    let payload: any = {};
    payload.volunteerid = this.service.getLoggedInuser().userId;
    payload.activityId = activityObject.activityId;
    payload.volunteerAppliedDate = this.datepipe.transform(new Date(), 'dd/MMM/yyyy');
    this.activityList=this.activityList.filter(al => al !== activityObject);
    this.service.registerActivityByVolunteer(payload).subscribe(res => {
      console.log('-- registered successfully -- ');
      this.toastr.success('registered successfully');

    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    })


  }

}

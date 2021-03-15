import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivityDetails } from 'src/app/models/activityDetails';
import { User } from 'src/app/models/user';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';

@Component({
  selector: 'app-volunteer-dashboard-activites',
  templateUrl: './volunteer-dashboard-activites.component.html',
  styleUrls: ['./volunteer-dashboard-activites.component.css']
})
export class VolunteerDashboardActivitesComponent implements OnInit {

  activityList: ActivityDetails[];
  loggedInUser: User;
  interval;


  constructor(private service: GlobalVolunteerService, private toastr: ToastrService, private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.loggedInUser = this.service.getLoggedInuser();


    this.service.volunteerRegisteredActivities(this.loggedInUser.userId).subscribe(res => {
      this.activityList = res;

      console.log(' available activity list ', this.activityList);
      this.activityList.forEach(object => {
        object.enableCheckInButton = true;
        object.enableCheckOutButton = true;
        const date1 = new Date(object.activityDate);
        const date2 = new Date();
        var Difference_In_Time = date1.getTime() - date2.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        if (Math.round(Difference_In_Days) >= 1) {
          object.enableCancelButton = false; // disable button

        } else {
          object.enableCancelButton = true; // enable cancel button
        }
        console.log(Math.round(Difference_In_Days) + " days");





      });
    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    })

    this.interval = setInterval(() => {
      this.enableDisableCheckInCheckOut();
    }, 4000);

  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  getFormatedStartTime(element) {

    console.log('-- element---', element);

    var subString = element.split(':')[0];

    const startTimeHours = subString.split(' ')[1];
    const startTimeMinutes = element.split(':')[1];
    return startTimeHours + ":" + startTimeMinutes;

  }
  getFormatedEndTime(element) {



    console.log('-- element---', element);

    var subString = element.split(':')[0];

    const endTimeHours = subString.split(' ')[1];
    const endTimeMinutes = element.split(':')[1];
    return endTimeHours + ":" + endTimeMinutes;

  }
  enableDisableCheckInCheckOut() {
    console.log('--- working ---');
    this.activityList.forEach(element => {

      let activityDate = new Date(element.activityDate);
      console.log('--- Activity Date ---', activityDate);
      let today = this.datepipe.transform(new Date(), 'dd/MMM/yyyy');

      var Difference_In_Time = activityDate.getTime() - new Date(today).getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

      var diff = Math.abs(Math.round(Difference_In_Days));
      console.log('-- deifference---', diff);
      if (diff == 0) {

        const startTimeHours = new Date(element.startTime).getHours();
        const startTimeMinutes = new Date(element.startTime).getMinutes();
        const endTimeHours = new Date(element.endTime).getHours();
        const endTimeMinutes = new Date(element.endTime).getMinutes();

        console.log(' start time hours--', startTimeHours);
        console.log(' startTimeMinutes--', startTimeMinutes);
        console.log(' end time hours--', endTimeHours);
        console.log(' end Time Minutes--', endTimeMinutes);
        console.log(' today hours--', new Date().getHours());
        console.log(' today Minutes--', new Date().getMinutes());
        var startTime = new Date();
        startTime.setHours(+startTimeHours);
        startTime.setMinutes(+startTimeMinutes);
        var endTime = new Date();
        endTime.setHours(endTimeHours);
        endTime.setMinutes(endTimeMinutes);
        console.log('--d1----', startTime);
        console.log('--today date----', new Date());

        var diff = (startTime.getTime() - new Date().getTime()) / 1000;
        diff /= 60;
        var diffMinutes = Math.round(diff);

        var endDiff = (new Date().getTime() - endTime.getTime()) / 1000;
        endDiff /= 60;
        var endDiffMinutes = Math.round(endDiff);

        console.log(' -- end time difference in minutes --- ' + endDiffMinutes);
        if (diffMinutes >= 0 && diffMinutes <= 30) {
          element.enableCheckInButton = false; //show button

        } else {
          element.enableCheckInButton = true; //show button
        }

        if (endDiffMinutes >= 0 && endDiffMinutes < 31) {
          element.enableCheckOutButton = false; //show button
        } else {
          element.enableCheckOutButton = true; //show button
        }




      }


    });


  }
  cancelActivity(activityObject: ActivityDetails) {
    let cancelPayload: any = {};
    cancelPayload.volunteerid = this.service.getLoggedInuser().userId;
    cancelPayload.activityId = activityObject.activityId;
    cancelPayload.volunteerCancelDate = this.datepipe.transform(new Date(), 'dd/MMM/yyyy');
    this.activityList = this.activityList.filter(al => al !== activityObject);

    this.service.volunteerCancelActivity(cancelPayload).subscribe(res => {
      console.log('-- registered successfully -- ');
      this.toastr.success('cancelled successfully');

    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    })




  }

  checkIn(activityObject: ActivityDetails) {

    let checkInPayload: any = {};
    checkInPayload.volunteerid = this.service.getLoggedInuser().userId;
    checkInPayload.activityId = activityObject.activityId;
    checkInPayload.checkInDate = this.datepipe.transform(new Date(), 'dd/MMM/yyyy HH:mm:ss');
    this.service.activityCheckIn(checkInPayload).subscribe(res => {

      console.log('-- registered successfully -- ', res);
      if (res['message'] === 'checkedin already') {
        this.toastr.warning('checked in already');

      } else {
        this.toastr.success('checked in successfully');
      }


    }, error => {

      this.toastr.error('everything is broken ', 'Major Error');
    })

  }
  checkOut(activityObject: ActivityDetails) {
    let checkOutPayload: any = {};
    checkOutPayload.volunteerid = this.service.getLoggedInuser().userId;
    checkOutPayload.activityId = activityObject.activityId;
    checkOutPayload.checkoutdate = this.datepipe.transform(new Date(), 'dd/MMM/yyyy HH:mm:ss');
    this.service.activityCheckOut(checkOutPayload).subscribe(res => {
      console.log('-- registered successfully -- ', res);
      if (res['message'] === 'checkedout already') {
        this.toastr.warning('checkedout already');

      } else {
        this.toastr.success('checked out successfully');
      }


    }, error => {

      this.toastr.error('everything is broken ', 'Major Error');
    })

  }

}

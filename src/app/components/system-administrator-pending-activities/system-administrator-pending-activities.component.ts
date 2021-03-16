import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivityDetails } from 'src/app/models/activityDetails';
import { User } from 'src/app/models/user';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';

@Component({
  selector: 'app-system-administrator-pending-activities',
  templateUrl: './system-administrator-pending-activities.component.html',
  styleUrls: ['./system-administrator-pending-activities.component.css']
})
export class SystemAdministratorPendingActivitiesComponent implements OnInit {

  activityList: ActivityDetails[];
  loggedInUser: User;

  constructor(private service: GlobalVolunteerService, private toastr: ToastrService, private datepipe: DatePipe) {

  }

  ngOnInit(): void {
    this.loggedInUser = this.service.getLoggedInuser();

    this.service.getAllActivities().subscribe(res => {
      this.activityList = res;
      console.log(' before filter activity list ', this.activityList);
       this.activityList = this.activityList.filter(activity => activity.status != 'A');
      console.log(' after filter activity list ', this.activityList);
    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    })
  }
  updateActivityStatus(al: ActivityDetails, status: string) {
    this.activityList = this.activityList.filter(u => u !== al);
    al.approvedDate = this.datepipe.transform(new Date(), 'dd/MMM/yyyy');
    al.approvedBy = this.service.getLoggedInuser().userId;

    if (status === 'A') {
      al.status = 'A';
    } else if (status === 'R') {
      al.status = 'R';
    }
    this.service.updateActivityStatus(al).subscribe(res => {
      console.log('-- update information -', res);
      this.toastr.success('Processed SuccessFully !!');

    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    });



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
}

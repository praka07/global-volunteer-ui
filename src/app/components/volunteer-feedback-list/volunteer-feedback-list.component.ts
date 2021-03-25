import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivityDetails } from 'src/app/models/activityDetails';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';

@Component({
  selector: 'app-volunteer-feedback-list',
  templateUrl: './volunteer-feedback-list.component.html',
  styleUrls: ['./volunteer-feedback-list.component.css']
})
export class VolunteerFeedbackListComponent implements OnInit {
  activityList: ActivityDetails[];

  constructor(private router: Router,private service:GlobalVolunteerService,private toastr:ToastrService) { }

  ngOnInit(): void {

    this.service.getCheckedinActivityList(this.service.getLoggedInuser().userId).subscribe(res => {
      this.activityList = res;


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
  routeToFeedback(obj:ActivityDetails){
    this.service.storeActivityObject(obj);
    this.router.navigate(['/volunteer/feedbackentry']);

  }
}

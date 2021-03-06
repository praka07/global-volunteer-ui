import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ToastrService } from 'ngx-toastr';
import { ActivityDetails } from 'src/app/models/activityDetails';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit {
  bsConfig: Partial<BsDatepickerConfig>;
  minDate: Date = new Date();
  maxDate: Date = new Date();
  startTime: Date = new Date();
  endTime: Date = new Date();
  createActivityForm: FormGroup;
  ismeridian: boolean = false;
  activityDetails = new ActivityDetails();

  constructor(private router: Router,private service:GlobalVolunteerService,private toastr: ToastrService,private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.maxDate.setDate(this.maxDate.getDate() + 15);
    this.endTime.setMinutes(this.startTime.getMinutes() + 30); // minimum meeting duration


    this.bsConfig = Object.assign({}, { containerClass: 'theme-blue', adaptivePosition: true, dateInputFormat: 'DD/MM/YYYY', showWeekNumbers: false });
    this.createActivityForm = new FormGroup({
      startTime: new FormControl(this.startTime, [Validators.required]),
      endTime: new FormControl(this.endTime, [Validators.required]),
      activityName: new FormControl('',[Validators.required]),
      content: new FormControl('',[Validators.required]),
      activityDate: new FormControl(new Date()),
      place: new FormControl('',[Validators.required]),
      totalNumberOfPeople: new FormControl('',[Validators.required])
    });
  }

  createActivity(){

    let scheduledStartTime= new Date(this.createActivityForm.get('startTime').value);
    let scheduledEndTime= new Date(this.createActivityForm.get('endTime').value);
    let scheduledStartDate=new Date(this.createActivityForm.get('activityDate').value);
    if(scheduledStartTime.getDate() == scheduledStartDate.getDate()){
      if(scheduledStartTime.getHours() < scheduledStartDate.getHours() || scheduledStartTime.getMinutes() < scheduledStartDate.getMinutes()){
       // this.scheduleMeetingForm.controls.endTime.setErrors({ invalidInput: true });
        this.toastr.error("You have specified a start time for the meeting that is before current time.Please specify a different starting time.");
        return;
      }

    }
    let durationOfMeetingTime= (scheduledEndTime.getTime() - scheduledStartTime.getTime())/60000;
    console.log('---durationOfMeetingTime--',durationOfMeetingTime);

    if(durationOfMeetingTime<30){
      this.toastr.error("we recommend schedule activity for 30 minutes");
        return;
    }

    let selectedStartDate= this.createActivityForm.get('activityDate').value;
    console.log('-selectedStartDate--', new Date(selectedStartDate).getDate());
    console.log('---startTime---',new Date(this.createActivityForm.get('startTime').value).getDate());
    console.log('-selectedStartDatehours-', new Date(selectedStartDate).getHours());
    console.log('---startTimehours---',new Date(this.createActivityForm.get('startTime').value).getHours());
    console.log('-selectedStartDateMinutes--', new Date(selectedStartDate).getMinutes());
    console.log('---startTimeMInutes---',new Date(this.createActivityForm.get('startTime').value).getMinutes());


    let convertedStartDate = this.datepipe.transform(this.createActivityForm.get('activityDate').value, 'dd/MM/yyyy');
    console.log('---convertedStartDate--',convertedStartDate)
    let convertedStartTime = this.datepipe.transform(this.createActivityForm.get('startTime').value, 'dd/MM/yyyy HH:mm:ss');
    let convertedEndTime = this.datepipe.transform(this.createActivityForm.get('endTime').value, 'dd/MM/yyyy HH:mm:ss');



    this.activityDetails.activityName = this.createActivityForm.get('activityName').value;
    this.activityDetails.startTime = convertedStartTime.toLocaleString();
    this.activityDetails.endTime = convertedEndTime.toLocaleString();
    this.activityDetails.activityDate = convertedStartDate.toLocaleString();
    this.activityDetails.duration= durationOfMeetingTime.toString();
    this.activityDetails.createdBy=this.service.getLoggedInuser().userId;
    this.activityDetails.createdDate=this.datepipe.transform(new Date(), 'dd/MM/yyyy');
    this.activityDetails.place= this.createActivityForm.get('place').value;
    this.activityDetails.content= this.createActivityForm.get('content').value;
    this.activityDetails.totalNumberOfPeople= this.createActivityForm.get('totalNumberOfPeople').value;
    this.service.createActivity(this.activityDetails).subscribe(res => {
      console.log("-- res ponse --", res);
      console.log("== Meeting Createed===");
      this.toastr.success('Activity created successfully !!');
      this.router.navigate(['/activitymanager/home']);
    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    })




  }
  get formControls() { return this.createActivityForm.controls; }
}

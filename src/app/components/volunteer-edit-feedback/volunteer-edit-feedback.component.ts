import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FeedBack } from 'src/app/models/feedback';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';

@Component({
  selector: 'app-volunteer-edit-feedback',
  templateUrl: './volunteer-edit-feedback.component.html',
  styleUrls: ['./volunteer-edit-feedback.component.css']
})
export class VolunteerEditFeedbackComponent implements OnInit {

  updateFeedbackForm: FormGroup;
  editFeedbackObject: FeedBack;
  attachmentDetails = [];
  @ViewChild("uploadValue",{static: true}) clearUploadedValue: ElementRef;
  attachmentNameLst=[];


  constructor(private datepipe: DatePipe,private toastr: ToastrService, private service: GlobalVolunteerService,private router:Router) { }

  ngOnInit(): void {

    this.editFeedbackObject = this.service.getEditFeedBack();
    this.updateFeedbackForm = new FormGroup({
      comments: new FormControl(this.editFeedbackObject.comments, [Validators.required])

    });

    console.log('-- Form Value ---', this.updateFeedbackForm);
  }
  ngAfterViewInit() {
   // this.clearUploadedValue.nativeElement.value= this.editFeedbackObject.attachmentName;
  }
  get formControls() { return this.updateFeedbackForm.controls; }


  updateFeedback(){

  }
}

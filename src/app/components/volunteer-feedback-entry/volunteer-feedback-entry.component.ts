import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivityDetails } from 'src/app/models/activityDetails';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';
@Component({
  selector: 'app-volunteer-feedback-entry',
  templateUrl: './volunteer-feedback-entry.component.html',
  styleUrls: ['./volunteer-feedback-entry.component.css']
})
export class VolunteerFeedbackEntryComponent implements OnInit {
  createFeedbackForm: FormGroup;
  selectedActivity: ActivityDetails;
  @ViewChild("uploadValue") clearUploadedValue: ElementRef;
  urls = [];
  attachmentDetails = [];
  constructor(private datepipe: DatePipe,private toastr: ToastrService, private service: GlobalVolunteerService,private router:Router) { }

  ngOnInit(): void {
    this.selectedActivity = this.service.getActivityObject();
    this.createFeedbackForm = new FormGroup({
      comments: new FormControl('', [Validators.required]),
      attachment: new FormControl('', [Validators.required])

    });
  }
  createFeedback() {
    let requestObject = {
      comments: this.formControls['comments'].value,
      attachmentContent: this.attachmentDetails,
      activityId: this.selectedActivity.activityId,
      createdBy: this.service.getLoggedInuser().userId,
      createdDate: this.datepipe.transform(new Date(), 'dd/MM/yyyy')
    };
    this.service.feedbackEntry(requestObject).subscribe(res => {
      console.log(' --- response about feed back ---', res);
      this.toastr.success('Thank you, noted !!');
      this.router.navigate(['/volunteer/feedback'])

    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    });

  }
  get formControls() { return this.createFeedbackForm.controls; }

  onSelectFile(event) {
    let fileList: FileList = event.target.files;

    console.log(' -- length ---', fileList.length);
    if (fileList.length > 0 && fileList.length < 4) {

      for (let i = 0; i < fileList.length; i++) {
        let file: File = fileList[i];
        let item = {};
        const reader: FileReader = new FileReader();
        let fileExtension = file.name.split('.').pop();
        console.log(' file Extension--', fileExtension);
        if ("jpeg" !== fileExtension) {
          this.toastr.error("We accept jpeg format files");
          this.clearUploadedValue.nativeElement.value = null;
          return;

        } else if ((file.size / 1024) > 10240) {
          this.toastr.error("we do not accept file size > 10 MB");
          return;

        } else {
          console.log('--file --', i, file);
          console.log('--file name --', i, file.name);
          console.log('--file pathValue --', i, this.clearUploadedValue.nativeElement.value);
          //console.log('--- activity name --',this.selectedActivity.activityId);
          item["name"] = file.name;
          reader.readAsDataURL(file);
          reader.onload = () => {
            console.log("--- image content -- ", reader.result);
            //  this.attachmentDetails.push(reader.result.toString());
            item["content"] = reader.result.toString();
          };

        }
        this.attachmentDetails.push(item);
      }

    } else {
      this.toastr.error("upload 3 files");
      this.clearUploadedValue.nativeElement.value = null;
    }
  }
}

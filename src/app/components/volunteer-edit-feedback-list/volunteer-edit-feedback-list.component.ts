import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FeedBack } from 'src/app/models/feedback';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';

@Component({
  selector: 'app-volunteer-edit-feedback-list',
  templateUrl: './volunteer-edit-feedback-list.component.html',
  styleUrls: ['./volunteer-edit-feedback-list.component.css']
})
export class VolunteerEditFeedbackListComponent implements OnInit {

  constructor(private router:Router,private service: GlobalVolunteerService, private toastr: ToastrService) { }
  feedbackLst: FeedBack[];
  ngOnInit(): void {

    this.service.getFeedbackInformation().subscribe(res => {
      this.feedbackLst = res;
      console.log('-- feed back List--', res);

    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    });

  }

  deleteFeedBack(obj: FeedBack) {
    this.service.deleteFeedBack(obj.id).subscribe(res => {

      this.feedbackLst = this.feedbackLst.filter(u => u !== obj); // remove from UI

      this.toastr.success('deleted successfully !!');

    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    });


  }

  editFeedBack(obj: FeedBack) {
    this.service.holdEditFeedBack(obj);
    this.router.navigate(['/volunteer/editfeedback']);

  }

}

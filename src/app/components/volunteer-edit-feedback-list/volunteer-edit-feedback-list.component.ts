import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FeedBack } from 'src/app/models/feedback';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';

@Component({
  selector: 'app-volunteer-edit-feedback-list',
  templateUrl: './volunteer-edit-feedback-list.component.html',
  styleUrls: ['./volunteer-edit-feedback-list.component.css']
})
export class VolunteerEditFeedbackListComponent implements OnInit {

  constructor(private service: GlobalVolunteerService,private toastr:ToastrService) { }
  feedbackLst: FeedBack[];
  ngOnInit(): void {

     this.service.getFeedbackInformation().subscribe(res =>{
      this.feedbackLst=res;
      console.log('-- feed back List--',res);

    },error =>{
      this.toastr.error('everything is broken ', 'Major Error');
    });

  }

  deleteFeedBack(obj:FeedBack){

  }

  editFeedBack(obj:FeedBack){

  }

}

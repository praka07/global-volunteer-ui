import { Component, OnInit } from '@angular/core';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';

@Component({
  selector: 'app-volunteer-edit-feedback',
  templateUrl: './volunteer-edit-feedback.component.html',
  styleUrls: ['./volunteer-edit-feedback.component.css']
})
export class VolunteerEditFeedbackComponent implements OnInit {

  constructor(private service:GlobalVolunteerService) { }

  ngOnInit(): void {
  }

}

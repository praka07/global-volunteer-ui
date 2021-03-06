import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { VolunteerRoutingModule } from './volunteer-routing.module';
import { VolunteerComponent } from './volunteer.component';
import { AvatarModule } from 'ngx-avatar';
import { SharedModule } from 'src/app/shared/shared.module';
import { VolunteerListActivityComponent } from '../volunteer-list-activity/volunteer-list-activity.component';
import { VolunteerUpcomingActivitiesComponent } from '../volunteer-upcoming-activities/volunteer-upcoming-activities.component';
import { VolunteerDashboardActivitesComponent } from '../volunteer-dashboard-activites/volunteer-dashboard-activites.component';
import { VolunteerFeedbackListComponent } from '../volunteer-feedback-list/volunteer-feedback-list.component';
import { VolunteerFeedbackEntryComponent } from '../volunteer-feedback-entry/volunteer-feedback-entry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VolunteerEditFeedbackComponent } from '../volunteer-edit-feedback/volunteer-edit-feedback.component';
import { VolunteerEditFeedbackListComponent } from '../volunteer-edit-feedback-list/volunteer-edit-feedback-list.component';


@NgModule({
  declarations: [VolunteerEditFeedbackListComponent,VolunteerEditFeedbackComponent,VolunteerFeedbackEntryComponent,VolunteerFeedbackListComponent,VolunteerComponent,VolunteerListActivityComponent,VolunteerDashboardActivitesComponent,VolunteerUpcomingActivitiesComponent],
  imports: [
    CommonModule,
    SharedModule,
    AvatarModule,
    VolunteerRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ], providers: [
    DatePipe
  ]
})
export class VolunteerModule { }

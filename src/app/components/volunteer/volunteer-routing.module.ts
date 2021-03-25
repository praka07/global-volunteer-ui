import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserChangePasswordComponent } from '../user-change-password/user-change-password.component';
import { VolunteerDashboardActivitesComponent } from '../volunteer-dashboard-activites/volunteer-dashboard-activites.component';
import { VolunteerEditFeedbackListComponent } from '../volunteer-edit-feedback-list/volunteer-edit-feedback-list.component';
import { VolunteerEditFeedbackComponent } from '../volunteer-edit-feedback/volunteer-edit-feedback.component';
import { VolunteerFeedbackEntryComponent } from '../volunteer-feedback-entry/volunteer-feedback-entry.component';
import { VolunteerFeedbackListComponent } from '../volunteer-feedback-list/volunteer-feedback-list.component';
import { VolunteerListActivityComponent } from '../volunteer-list-activity/volunteer-list-activity.component';
import { VolunteerUpcomingActivitiesComponent } from '../volunteer-upcoming-activities/volunteer-upcoming-activities.component';

import { VolunteerComponent } from './volunteer.component';

const routes: Routes = [
  {
    path: '', component: VolunteerComponent, children: [
      {
        path: 'changepassword', component: UserChangePasswordComponent
      },
      {
        path: 'listactivity', component: VolunteerListActivityComponent
      },
      {
        path: 'registeractivity', component: VolunteerUpcomingActivitiesComponent
      },
      {
        path: 'home', component: VolunteerDashboardActivitesComponent
      },
      {
        path: 'feedbackentry', component: VolunteerFeedbackEntryComponent

      },
      {
        path: 'feedback', component: VolunteerFeedbackListComponent

      },
      {
        path: 'editfeedback', component: VolunteerEditFeedbackListComponent
      },

      {
        path: '', redirectTo: '/volunteer/home', pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteerRoutingModule { }

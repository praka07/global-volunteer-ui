import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteerRoutingModule } from './volunteer-routing.module';
import { VolunteerComponent } from './volunteer.component';
import { AvatarModule } from 'ngx-avatar';
import { SharedModule } from 'src/app/shared/shared.module';
import { VolunteerListActivityComponent } from '../volunteer-list-activity/volunteer-list-activity.component';


@NgModule({
  declarations: [VolunteerComponent,VolunteerListActivityComponent],
  imports: [
    CommonModule,
    SharedModule,
    AvatarModule,
    VolunteerRoutingModule
  ]
})
export class VolunteerModule { }

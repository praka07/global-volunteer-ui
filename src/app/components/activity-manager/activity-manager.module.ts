import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ActivityManagerRoutingModule } from './activity-manager-routing.module';
import { ActivityManagerComponent } from './activity-manager.component';
import { AvatarModule } from 'ngx-avatar';
import { CreateActivityComponent } from '../create-activity/create-activity.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';


@NgModule({
  declarations: [ActivityManagerComponent, CreateActivityComponent],
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    AvatarModule,
    FormsModule,
    ReactiveFormsModule,
    ActivityManagerRoutingModule
  ], providers: [
    DatePipe
  ],
})
export class ActivityManagerModule { }

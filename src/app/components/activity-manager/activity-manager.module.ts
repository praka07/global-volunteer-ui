import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityManagerRoutingModule } from './activity-manager-routing.module';
import { ActivityManagerComponent } from './activity-manager.component';
import { AvatarModule } from 'ngx-avatar';
import { CreateActivityComponent } from '../create-activity/create-activity.component';


@NgModule({
  declarations: [ActivityManagerComponent,CreateActivityComponent],
  imports: [
    CommonModule,
    AvatarModule,
    ActivityManagerRoutingModule
  ]
})
export class ActivityManagerModule { }

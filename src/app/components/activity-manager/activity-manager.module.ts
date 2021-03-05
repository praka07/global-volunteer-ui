import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityManagerRoutingModule } from './activity-manager-routing.module';
import { ActivityManagerComponent } from './activity-manager.component';


@NgModule({
  declarations: [ActivityManagerComponent],
  imports: [
    CommonModule,
    ActivityManagerRoutingModule
  ]
})
export class ActivityManagerModule { }

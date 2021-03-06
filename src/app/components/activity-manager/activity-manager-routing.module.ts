import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateActivityComponent } from '../create-activity/create-activity.component';

import { ActivityManagerComponent } from './activity-manager.component';

const routes: Routes = [{
  path: '', component: ActivityManagerComponent, children: [{
    path: 'createactivity', component: CreateActivityComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityManagerRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateActivityComponent } from '../create-activity/create-activity.component';
import { ListActivityComponent } from '../list-activity/list-activity.component';

import { ActivityManagerComponent } from './activity-manager.component';

const routes: Routes = [{
  path: '', component: ActivityManagerComponent, children: [{
    path: 'createactivity', component: CreateActivityComponent
  }, {
    path: 'home', component: ListActivityComponent
  }, {
    path: 'listactivity', component: ListActivityComponent
  },
  {
    path: '', redirectTo: '/activitymanager/home', pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityManagerRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityManagerComponent } from './activity-manager.component';

const routes: Routes = [{ path: '', component: ActivityManagerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityManagerRoutingModule { }

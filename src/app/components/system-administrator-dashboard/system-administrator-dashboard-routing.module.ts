import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemAdministratorDashboardComponent } from './system-administrator-dashboard.component';


const routes: Routes = [
  {
    path: '', component: SystemAdministratorDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAdministratorDashboardRoutingModule { }

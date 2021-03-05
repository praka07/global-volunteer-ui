import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from '../create-user/create-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { ListActivityComponent } from '../list-activity/list-activity.component';
import { ListUserComponent } from '../list-user/list-user.component';
import { UserChangePasswordComponent } from '../user-change-password/user-change-password.component';

import { SystemAdministratorComponent } from './system-administrator.component';

const routes: Routes = [{
  path: '', component: SystemAdministratorComponent, children: [{
    path: 'createuser', component: CreateUserComponent
  },
  {
    path: 'edituser', component: EditUserComponent

  },
  {
    path: 'listuser', component: ListUserComponent

  },
  {
    path: 'listactivity', component: ListActivityComponent
  },
  {
    path: 'home', component: ListActivityComponent
  },
  {
    path: 'changepassword', component: UserChangePasswordComponent
  },
  {
    path: '', redirectTo: '/systemadministrator/home', pathMatch: 'full'
  }

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAdministratorRoutingModule { }

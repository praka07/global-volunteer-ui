import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemAdministratorRoutingModule } from './system-administrator-routing.module';
import { SystemAdministratorComponent } from './system-administrator.component';
import { AvatarModule } from 'ngx-avatar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from '../create-user/create-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { ListUserComponent } from '../list-user/list-user.component';
import { ListActivityComponent } from '../list-activity/list-activity.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [SystemAdministratorComponent, CreateUserComponent, EditUserComponent, ListUserComponent, ListActivityComponent],
  imports: [
    CommonModule,
    AvatarModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    SystemAdministratorRoutingModule
  ],
  exports: [
    ListActivityComponent
  ]
})
export class SystemAdministratorModule { }
export { ListActivityComponent } from '../list-activity/list-activity.component';

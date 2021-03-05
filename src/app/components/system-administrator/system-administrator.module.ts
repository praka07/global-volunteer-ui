import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemAdministratorRoutingModule } from './system-administrator-routing.module';
import { SystemAdministratorComponent } from './system-administrator.component';
import { AvatarModule } from 'ngx-avatar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from '../create-user/create-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { ListUserComponent } from '../list-user/list-user.component';
import { UserChangePasswordComponent } from '../user-change-password/user-change-password.component';



@NgModule({
  declarations: [SystemAdministratorComponent,UserChangePasswordComponent,CreateUserComponent,EditUserComponent,ListUserComponent],
  imports: [
    CommonModule,
    AvatarModule,
    ReactiveFormsModule,
    FormsModule,
    SystemAdministratorRoutingModule
  ]
})
export class SystemAdministratorModule { }

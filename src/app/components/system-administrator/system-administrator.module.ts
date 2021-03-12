import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SystemAdministratorRoutingModule } from './system-administrator-routing.module';
import { SystemAdministratorComponent } from './system-administrator.component';
import { AvatarModule } from 'ngx-avatar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from '../create-user/create-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { ListUserComponent } from '../list-user/list-user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SystemAdministratorPendingActivitiesComponent } from '../system-administrator-pending-activities/system-administrator-pending-activities.component';
import { SystemAdministratorReportComponent } from '../system-administrator-report/system-administrator-report.component';



@NgModule({
  declarations: [SystemAdministratorComponent,SystemAdministratorPendingActivitiesComponent,SystemAdministratorReportComponent, CreateUserComponent, EditUserComponent, ListUserComponent],
  imports: [
    CommonModule,
    AvatarModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    SystemAdministratorRoutingModule
  ],providers:[
    DatePipe
  ]
})
export class SystemAdministratorModule { }

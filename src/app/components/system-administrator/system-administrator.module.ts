import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemAdministratorRoutingModule } from './system-administrator-routing.module';
import { SystemAdministratorComponent } from './system-administrator.component';
import { AvatarModule } from 'ngx-avatar';


@NgModule({
  declarations: [SystemAdministratorComponent],
  imports: [
    CommonModule,
    AvatarModule,
    SystemAdministratorRoutingModule
  ]
})
export class SystemAdministratorModule { }

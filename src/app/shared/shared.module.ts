import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserChangePasswordComponent } from '../components/user-change-password/user-change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserChangePasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    UserChangePasswordComponent
  ]
})
export class SharedModule { }

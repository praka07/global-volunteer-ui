import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';
declare var $: any;

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  userObject = new User();
  public allPasswordMatches: boolean = false;

  constructor(private navRouter: Router, private formBuilder: FormBuilder, private toastr: ToastrService, private router: ActivatedRoute, private service: GlobalVolunteerService) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({

      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.checkPasswords });


    $(document).ready(function () {

      $('.pwd').click(function () {
        let value = $('#newPassword').attr('type');
        if (value === 'password') {
          $(".pwd i").removeClass("fa-eye").addClass("fa-eye-slash");
          $('#newPassword').attr('type', 'text');
        } else {
          $(".pwd i").removeClass("fa-eye-slash").addClass("fa-eye");
          $('#newPassword').attr('type', 'password');

        }

      });

      $('.confirmPwd').click(function () {
        let value = $('#confirmPassword').attr('type');
        if (value === 'password') {
          $(".confirmPwd i").removeClass("fa-eye").addClass("fa-eye-slash");
          $('#confirmPassword').attr('type', 'text');
        } else {
          $(".confirmPwd i").removeClass("fa-eye-slash").addClass("fa-eye");
          $('#confirmPassword').attr('type', 'password');

        }

      });

    });

  }
  updateNewPassword() {
    let payload: any = {};
    payload.userId = this.service.getLoggedInuser().userId;
    payload.newPass = this.forgotPasswordForm.get('newPassword').value;

    this.service.updatePassword(payload).subscribe(res => {
      console.log('--res--', res);
      this.toastr.success("updated password");
      this.navRouter.navigate(['']);

    }, error => {
      if (400 == error.status) {
        this.toastr.error('you are unauthorized user !!', 'Major Error');

      } else {
        this.toastr.error('everything is broken ', 'Major Error');
      }
    })


  }

  get formControls() { return this.forgotPasswordForm.controls; }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('newPassword').value;
    let confirmPass = group.get('confirmPassword').value;

    return pass === confirmPass ? null : { notSame: true }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';
declare var $: any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  contentEditable: boolean;
  user = new User();
  userDetails = new User();


  constructor(private service: GlobalVolunteerService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.pwd').click(function () {
        let value = $('#password').attr('type');
        if (value === 'password') {
          $(".pwd i").removeClass("fa-eye").addClass("fa-eye-slash");
          $('#password').attr('type', 'text');
        } else {
          $(".pwd i").removeClass("fa-eye-slash").addClass("fa-eye");
          $('#password').attr('type', 'password');

        }

      });

    });

  }
  signIn(){
    this.router.navigate(['systemadministrator']);
  }
  // signIn() {
  //   let loginPayLoad: any = {};
  //   loginPayLoad.username = this.user.emailId;
  //   loginPayLoad.password = this.user.password;
  //   this.service.validUserLogin(loginPayLoad).subscribe(response => {
  //     this.userDetails = response;
  //     console.log('-- response --  ', this.userDetails);
  //     this.service.holdUserDetails(this.userDetails); // store logged in user details
  //     if (this.userDetails.role == 1) {
  //       console.log("== load super Admin page==");
  //       this.router.navigate(['systemadmindashboard']);

  //     } else if (this.userDetails.role == 2 ) {
  //       console.log("== load Activity Manager==");
  //       this.router.navigate(['acivitymanager']);


  //     }else{
  //       console.log("== load Volunteers==");
  //       this.router.navigate(['volunteers']);

  //     }

  //   }, error => {
  //     console.log("error", error.status);
  //     if (400 == error.status) {
  //       this.toastr.error('invalid username or password', 'Major Error');

  //     } else {
  //       this.toastr.error('everything is broken ', 'Major Error');
  //     }

  //   })

  // }

  toggleEditable(event) {
    if (event.target.checked) {
      this.contentEditable = true;
    } else {
      this.contentEditable = false;
    }
    console.log('--contentEditable--', this.contentEditable);
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
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


  constructor() { }

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
  signIn() {
    console.log('--- sign in --');
  }

  toggleEditable(event) {
    if (event.target.checked) {
      this.contentEditable = true;
    } else {
      this.contentEditable = false;
    }
    console.log('--contentEditable--', this.contentEditable);
  }
}

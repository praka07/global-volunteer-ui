import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  loggedInUser = new User();
  createUser = new User();
  userRoles = [{
    'id': 2,
    'roleName': 'Activity Manager'

  },
  {
    'id': 3,
    'roleName': 'Volunteers'

  }
  ];
  constructor(private service: GlobalVolunteerService,private toastr: ToastrService,private navigate: Router) { }

  ngOnInit(): void {
    this.loggedInUser = this.service.getLoggedInuser();
    this.createUser.roleName = '';
  }
  createNewUser() {
    this.createUser.createdBy = this.loggedInUser.userId;
    this.createUser.role = +this.createUser.roleName;// create as user or subordinate
    this.createUser.createdDate= new Date();
    this.service.registerUser(this.createUser).subscribe(response => {
      if ('emailId already registered with another user' === response['message']) {
        this.toastr.warning('user already present !!');

      } else {
        this.toastr.success("Record added successfully !!");
        this.navigate.navigate(['systemadministrator/edituser']);

      }


    }, error => {
      if (500 == error.status) {
        this.toastr.error('everything is broken ', 'Major Error');
      } else if (208 == error.status) {

        this.toastr.warning('user already present !!');
      }

    });
  }
}

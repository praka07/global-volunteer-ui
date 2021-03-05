import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';
declare var $: any;

@Component({
  selector: 'app-system-administrator',
  templateUrl: './system-administrator.component.html',
  styleUrls: ['./system-administrator.component.css']
})
export class SystemAdministratorComponent implements OnInit {

  userDetail = new User();

  constructor(private service:GlobalVolunteerService) { }

  ngOnInit(): void {
    this.userDetail = this.service.getLoggedInuser();
    $(document).ready(function () {
      $(".sidebar-toggler, .sidebar a:not('.drop')").click(function () {
        $(".main-wrapper").toggleClass("sidebaropen");
      })
    });
  }

  logOut() {
    this.service.logOut();
  }

}

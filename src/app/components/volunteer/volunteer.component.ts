import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';
declare var $:any;

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
  userDetail = new User();
  constructor(private service:GlobalVolunteerService) { }

  ngOnInit(): void {
    this.userDetail = this.service.getLoggedInuser();
    $(document).ready(function () {
      $(".sidebar-toggler, .sidebar a:not('.drop')").click(function () {
        $(".main-wrapper").toggleClass("sidebaropen");
      })
    });

    $(window).scroll(function () {
      if ($(window).scrollTop() > 30) {
        $(".sidebar").addClass('postop');
      } else {
        $(".sidebar").removeClass('postop');
      }
    });
  }
  logOut() {
    this.service.logOut();
  }
}

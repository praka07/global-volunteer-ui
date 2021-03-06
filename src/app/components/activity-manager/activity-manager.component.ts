import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';
declare var $:any;



@Component({
  selector: 'app-activity-manager',
  templateUrl: './activity-manager.component.html',
  styleUrls: ['./activity-manager.component.css']
})
export class ActivityManagerComponent implements OnInit {

  userDetail = new User();
  constructor(private service:GlobalVolunteerService) { }

  ngOnInit(): void {
    this.userDetail = this.service.getLoggedInuser();
    console.log(' --- logged in user details ---',this.userDetail);
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

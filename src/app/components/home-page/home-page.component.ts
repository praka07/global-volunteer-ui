import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgwWowService } from 'ngx-wow';
import { ActivityDetails } from 'src/app/models/activityDetails';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';
declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  activityList: ActivityDetails[];
  zeroThActivity:ActivityDetails;
  zeroThDate;
  zeroThMonth;
  zeroThYear;
  zeroThActivityName: string;
  zeroThContent: string;
  zeroThConductedBy: string;

  constructor(private wowService: NgwWowService,private service:GlobalVolunteerService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.wowService.init();
    $(document).ready(function () {
      $('#MultiCarousel').on('slide.bs.carousel', function (e) {
        /*
            CC 2.0 License Iatek LLC 2018 - Attribution required
        */
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 5;
        var totalItems = $('.carousel-item').length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
              $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
              $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
          }
        }
      });
      $(window).on('load', function () {
        var portfolioIsotope = $('#gallerybox').isotope({
          itemSelector: '.col-md-6'
        });
      });
      $('.lightbox').nivoLightbox({ effect: 'fadeScale', keyboardNav: true, });
      $(function () {
        $('.js-conveyor-example').jConveyorTicker({ reverse_elm: true });
      });

    });

    this.service.getHomePageActivityList().subscribe(res =>{
      this.activityList = res;
      this.zeroThActivity=this.activityList[0];
      this.zeroThDate=this.zeroThActivity.activityDate.split('/')[0];
      this.zeroThMonth=this.zeroThActivity.activityDate.split('/')[1];
      this.zeroThYear=this.zeroThActivity.activityDate.split('/')[2];
      this.zeroThActivityName=this.zeroThActivity.activityName;
      this.zeroThContent=this.zeroThActivity.content;
      this.zeroThConductedBy=this.zeroThActivity.conductedBy;

      console.log(' available activity list ', this.activityList);

    },error =>{
      this.toastr.error('everything is broken ', 'Major Error');
    })


  }

  getFormatedStartTime(element) {
    console.log('-- element---',element);

    var subString=element.split(':')[0];

    const startTimeHours = subString.split(' ')[1];
    const startTimeMinutes = element.split(':')[1];
    return startTimeHours + ":" + startTimeMinutes;

  }

}

import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private wowService: NgwWowService) { }

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

  }

}

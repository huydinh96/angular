import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';
declare var $: any;
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  // public carouselOne: NguCarousel;
  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.slide-img').owlCarousel({
        autoHeight: true,
        center: true,
        nav: true,
        items: 1,
        margin: 30,
        loop: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
      });
    });
  }
  // initSlider() {
  //   $('.slide-img').slick({
  //     infinite: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   });
  // }
}

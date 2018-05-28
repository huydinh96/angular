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
    // this.initSlider();
  }
  // initSlider() {
  //   $('.slide-img').slick({
  //     infinite: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   });
  // }
}

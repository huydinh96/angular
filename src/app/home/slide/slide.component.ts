import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  // public carouselOne: NguCarousel;
  constructor() { }

  ngOnInit() {
    // this.carouselOne = {
    //   grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    //   slide: 1,
    //   speed: 400,
    //   interval: 4000,
    //   point: {
    //     visible: true
    //   },
    //   load: 2,
    //   touch: true,
    //   loop: true,
    //   custom: 'banner'
    // };
  }
}

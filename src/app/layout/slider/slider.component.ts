import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { $ } from 'protractor';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // AfterViewInit() {
  //   $('.slider-items').slick({
  //     infinite: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   });
  // }
}

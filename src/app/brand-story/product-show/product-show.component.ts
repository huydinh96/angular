import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.scss']
})
export class ProductShowComponent implements OnInit {
  tabIndex = 1;
  isShow = true;
  changeValues(tabIndex) {
    this.tabIndex = tabIndex;
  }
  constructor() { }

  ngOnInit() {
  }
  changeData(valid: boolean) {
    this.isShow = valid;
  }

}

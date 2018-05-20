import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-processing',
  templateUrl: './product-processing.component.html',
  styleUrls: ['./product-processing.component.scss']
})
export class ProductProcessingComponent implements OnInit {
  isShow = true;
  changeValue(valid: boolean) {
    this.isShow = valid;
  }
  // tabIndex = 1;
  // changeValue(tabIndex) {
  //   this.tabIndex = tabIndex;
  //   // console.log('aaaa')
  // }
  constructor() { }

  ngOnInit() {
  }

}

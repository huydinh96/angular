import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ProductService } from '../../providers/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from '../../interface/product';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() product: IProduct;
  @Output() select: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  public products: any[];
  public pages: number[];
  public currentPage: number;
  constructor(
    private productService: ProductService,
    private router: Router,
    private activetedRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    // lấy id items trong navigation
    this.activetedRouter.queryParams.subscribe(params => {
      this.currentPage = params['pageNumber'] || 1;
      console.log(this.currentPage);
    });
    this.productService.GetProduct().subscribe((res: any) => {
      this.products = res;
    }, error => {
      console.log(error);
    });
    this.pages = [1, 2, 3, 4];
  }
  addToCart(product: IProduct) {
    console.log(product.name);
    this.select.emit(product);
  }
  // public addToCart() {
  //   const sanpham = [];
  //   this.productService.addThemVaoGioHang(sanpham);
  // }

}

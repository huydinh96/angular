import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { auth } from 'firebase';
import { ProductService } from '../../providers/product.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public isLogin: boolean;
  public nemberUser: string;
  public emailUser: string;
  public products: any[];
  public keyword: string;
  constructor(
    private authService: AuthService,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    // tslint:disable-next-line:no-shadowed-variable
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        this.nemberUser = auth.displayName;
        this.emailUser = auth.email;
      } else {
        this.isLogin = false;
      }
    });
  }
  onClickLogout() {
    this.authService.logout();
  }
  Search() {
    this.productService.Search(this.keyword).subscribe((reponse: any) => {
      this.products = reponse;
      console.log(reponse);
    }, error => {
      console.log(error);
    });
  }
}

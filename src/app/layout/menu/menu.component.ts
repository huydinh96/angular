import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { auth } from 'firebase';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public isLogin: boolean;
  public nemberUser: string;
  public emailUser: string;
  constructor(
    private authService: AuthService,
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
  onHide() {

  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    // private toastrService: ToastrService,
  ) { }

  ngOnInit() {
  }
  loginUser(e){
    e.preventDefault();
    console.log(e);
    var email = e.target.elements[0].value;
    var pass = e.target.elements[1].value;

    if (email == 'huycay@gmail.com' && pass =='142536')
      this.router.navigate(['/home']);
    else
        this.router.navigate(['/register']);
      
 }
  onClickFbLogin() {
    this.authService.loginFb().then((res) => {
      this.router.navigate(['/home']);
    }).catch((err) => console.log(err.message));
  }
  onClickGoogleLogin() {
    this.authService.loginGoogle().then((res) => {
      this.router.navigate(['/home']);
    }).catch((err) => console.log(err.message));
  }
  onClickTwLogin() {
    this.authService.loginTwitter().then((res) => {
      this.router.navigate(['/home']);
    }).catch((err) => console.log(err.message));
  }
}

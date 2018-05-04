import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor() { }

  ngOnInit() {
  }
  onSubmit(formSignIn) {
    console.log(formSignIn);
    // console.log(this.email, this.password);
  }

}

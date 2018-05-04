import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: User;
  constructor() {
  }

  ngOnInit() {
    this.user = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  save(f: User, isValid: boolean) {

  }
  onSubmit(SignIn) {
    console.log(SignIn);
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  authService: any;
  email: '';
  password: '';
  constructor(
    authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/login']);
      }).catch((err) => {
        console.log(err);
      });
  }
}

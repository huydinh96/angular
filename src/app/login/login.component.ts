import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public rForm: FormGroup;
  public isSubmitting = false;
  public formErrors = {
    email: '',
    password: '',
  };
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }
  onLogin() {
    this.isSubmitting = true;
    this.loginService.login(this.rForm.value).subscribe(
      () => {
        this.isSubmitting = false;
        alert('bravo');
      },
      (err) => {
        this.isSubmitting = false;
        // { detail: {'email': 'trung' } }
        if (err.detail) {
          console.log(err.detail);
          Object.keys(err.detail).map((field) => {
            this.formErrors[field] = err.detail[field];
          });
        }
      }
    );
  }

  public buildForm() {
    this.rForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['', [
        Validators.required,
      ]],
    });
  }
  // private onValue(){}
}

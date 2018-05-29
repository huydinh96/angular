import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { RegisterService } from './register.service';
import { User } from '../interface/user';
import { UserService } from '../providers/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService, UserService, ToastrService],
})
export class RegisterComponent implements OnInit {
  registerUser: any;
  public registerForm: FormGroup;
  public isSubmitting = false;
  user: User[];
  email: '';
  fullname: '';
  password: '';
  confirmPassword: '';
  public formErrors = {
    email: '',
    fullname: '',
    password: '',
    confirmPassword: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
    private userService: UserService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  public onSubmit() {
    this.isSubmitting = true;
    this.registerService.register(this.registerForm.value).subscribe(
      () => {
        this.isSubmitting = false;
        this.toastrService.success('Đăng kí thành công');
        this.router.navigate(['/login']);
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
    const registerUser: User = {
      username: this.fullname,
      email: this.email,
      password: this.password,
      passwordConfirm: this.confirmPassword,
    };
    // this.userService.postUser(this.registerUser).subscribe();
    // this.userService._user(registerUser);
  }

  private buildForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      fullname: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]+'),
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$'),
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$'),
        this.matchPassWord,
      ]],
    });
    this.registerForm.valueChanges.subscribe(() => {
      this.formValidate();
    });
  }
  matchPassWord(c: AbstractControl): any {
    if (!c.parent || !c) { return; }
    const pwd = c.parent.get('password');
    const cpwd = c.parent.get('confirmPassword');
    if (!pwd || !cpwd) { return; }
    if (pwd.value !== cpwd.value) {
      return { invalid: true };
    }
  }
  private formValidate() {
    Object.keys(this.formErrors).map((field) => {
      const formControl = this.registerForm.get(field);
      if (formControl && formControl.dirty && formControl.invalid) {
        this.formErrors[field] = 'Yêu cầu nhập dữ liệu';
      } else {
        this.formErrors[field] = '';
      }
      // if (this.registerForm.get('fullname').dirty) {
      //   this.toastrService.error('Nhập full name');
      // }
    });
  }
}

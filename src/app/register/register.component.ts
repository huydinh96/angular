import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { RegisterService } from './register.service';
import { User } from '../interface/user';
import { ToastrService } from '../providers/toastr.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  email: '';
  username: '';
  password: '';
  passwordConfirm: '';
  public formErrors = {
    email: '',
    userName: '',
    password: '',
    passwordConfirm: '',
  };
  constructor(private fb: FormBuilder,
    private registerService: RegisterService,
    private toastrService: ToastrService,
  ) { }
  ngOnInit() {
    this.builForm();
  }
  // public formRegister() {
  //   this.registerForm = new FormGroup({
  //     username: new FormControl(),
  //     email: new FormControl(),
  //     password: new FormControl(),
  //     confirmPassword: new FormControl()
  //   });
  // }
  public builForm() {
    this.registerForm = this.fb.group({
      username: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]],
      confirmPassword: ['', [
        Validators.required
      ]]
    });
    this.registerForm.valueChanges.subscribe(() => {
      this.formValidate();
    });
  }
  private formValidate() {
    Object.keys(this.formErrors).map(field => {
      const formControl = this.registerForm.get(field);
      if (formControl && formControl.dirty && formControl.invalid) {
        this.formErrors[field] = 'Thông tin nhập vào không hợp lệ';
      } else {
        this.formErrors[field] = '';
      }
    });
  }
  matchPassword(c: AbstractControl): any {
    if (!c.parent || !c) { return; }
    const pwd = c.parent.get('passWord');
    const cpwd = c.parent.get('passwordConfirm');
    if (!pwd || !cpwd) { return; }
    if (pwd.value !== cpwd.value) {
      return { invalid: true };
    }
  }
}

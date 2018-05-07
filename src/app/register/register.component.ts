import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { RegistrService } from './registr.service';
import { ToastrService } from '../providers/toastr.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public isSubmitting = false;

  public formErrors = {
    email: '',
    fullname: '',
    password: '',
    confirmPassword: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegistrService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.buildForm();
  }
  public onSubmit() {
    this.isSubmitting = true;
    this.registerService.register(this.registerForm.value).subscribe(
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

  private buildForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      fullname: ['', [
        Validators.required,
        Validators.pattern['^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$'],
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern['(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$'],
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.pattern['(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$'],
      ]],
    });
    this.registerForm.valueChanges.subscribe(() => {
      this.formValidate();
    });
  }
  public login() {
    console.log(this.registerForm.value);
  }
  private formValidate() {
    Object.keys(this.formErrors).map((field) => {
      const formControl = this.registerForm.get(field);
      if (formControl && formControl.dirty && formControl.invalid) {
        this.formErrors[field] = 'Yêu cầu nhập thông tin';
      } else {
        this.formErrors[field] = '';
      }
    });
  }
}

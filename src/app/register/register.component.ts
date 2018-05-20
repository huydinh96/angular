import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  authService: any;
  public email: string;
  public password: string;
  constructor(
    authService: AuthService,
    private router: Router,
    private flashMensaje: FlashMessagesService,
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.flashMensaje.show('Usuario creado correctamente.',
          { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['/privado']);
      }).catch((err) => {
        this.flashMensaje.show(err.message,
          { cssClass: 'alert-danger', timeout: 4000 });
      });
  }
}

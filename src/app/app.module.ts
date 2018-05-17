import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { appRoutes } from './app.routes';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PolicySecurityComponent } from './policy-security/policy-security.component';
import { MapComponent } from './map/map.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AuthService } from './providers/auth.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { ToastrModule, ToastrService } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PolicySecurityComponent,
    MapComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FlashMessagesModule,
    ToastrModule,
  ],
  providers: [
    ToastrService,
    AuthService,
    FlashMessagesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

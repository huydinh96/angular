import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { ReactiveFormsModule } from '@angular/forms';

const routers: Routes = [
    { path: '', component: LoginComponent }
];
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routers),
    ],
    declarations: [LoginComponent],
    providers: [LoginService],
})
export class LoginModule { }

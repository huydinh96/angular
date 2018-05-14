import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterService } from './register.service';
const routers: Routes = [
    { path: '', component: RegisterComponent }
];
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(routers),
    ],
    providers: [RegisterService],
    declarations: [RegisterComponent],
})
export class RegisterModule { }

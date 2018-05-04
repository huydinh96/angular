import { Routes } from '@angular/router';
import { MenuComponent } from './layout/menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
export const appRoutes: Routes = [
    // { path: 'register', loadChildren: './register/register.module#RegisterModule' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' },
];

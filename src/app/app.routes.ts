import { Routes } from '@angular/router';
import { PolicySecurityComponent } from './policy-security/policy-security.component';
import { MapComponent } from './map/map.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
export const appRoutes: Routes = [
    { path: 'brands', loadChildren: './brand-story/brand-story.module#BrandStoryModule' },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'bao-mat', component: PolicySecurityComponent },
    { path: 'so-do', component: MapComponent },
    { path: '**', component: NotfoundComponent },
];
